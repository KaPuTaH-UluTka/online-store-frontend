import { Request, Response } from 'express';
import ApiError from '../error/ApiError.js';
import { NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Basket, User } from '../models/models.js';

const generateJWT = (id: string, email: string, role: string) => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET as string, {
    expiresIn: '72h',
  });
};

class UserController {
  static registration = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, role } = req.body;

    if (!email || !password) {
      return next(ApiError.badRequest('Incorrect email or password'));
    }
    const basicUser = await User.findOne({ where: { email } });
    if (basicUser) {
      return next(ApiError.badRequest('User with this email already exists'));
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await (await User.create({ email, role, password: hashPassword })).toJSON();
    const basket = await Basket.create({ userId: user.id });
    const token = generateJWT(user.id, user.email, user.role);
    return res.json(token);
  };

  static login = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return next(ApiError.badRequest('User not found'));
    }
    const currentUser = user.toJSON();
    const comparePassword = bcrypt.compareSync(password, currentUser.password);
    if (!comparePassword) {
      return next(ApiError.badRequest('Incorrect password'));
    }
    const token = generateJWT(currentUser.id, currentUser.email, currentUser.role);
    return res.json(token);
  };

  static check = async (req: Request, res: Response, next: NextFunction) => {
    const token = generateJWT(req.user.id, req.user.email, req.user.role);
    return res.json(token);
  };
}

export default UserController;
