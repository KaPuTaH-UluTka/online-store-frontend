import { Request, Response } from 'express';
import ApiError from '../error/ApiError.js';
import { NextFunction } from 'express';

class UserController {
  static registration = async (req: Request, res: Response) => {};

  static login = async (req: Request, res: Response) => {};

  static check = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.query;
    if (!id) {
      next(ApiError.badRequest('Id not found'));
    }
    res.json(id);
  };
}

export default UserController;
