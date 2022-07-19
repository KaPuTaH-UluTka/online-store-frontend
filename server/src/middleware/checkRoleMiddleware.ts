import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
interface IDecoded {
  id: number;
  email: string;
  role: string;
}

export default function (role: string) {
  return function (req: Request, res: Response, next: NextFunction) {
    if (req.method === 'OPTIONS') {
      next();
    }
    try {
      const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null;

      if (!token) {
        return res.status(401).json({ message: 'Not authorized' });
      }
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as IDecoded;
      if (decoded.role !== role) {
        return res.status(403).json({ message: 'Access denied' });
      }
      req.user = decoded;

      next();
    } catch (err) {
      return res.status(401).json({ message: 'Not authorized' });
    }
  };
}
