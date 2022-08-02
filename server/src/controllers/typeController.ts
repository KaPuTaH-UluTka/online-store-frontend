import { Request, Response } from 'express';
import { Type } from '../models/models.js';

class TypeController {
  static create = async (req: Request, res: Response) => {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  };

  static getAll = async (req: Request, res: Response) => {
    const types = await Type.findAndCountAll();
    return res.json(types);
  };

  static check = async (req: Request, res: Response) => {};
}

export default TypeController;
