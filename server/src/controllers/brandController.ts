import { Request, Response } from 'express';
import { Brand } from '../models/models.js';

class BrandController {
  static create = async (req: Request, res: Response) => {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  };

  static getAll = async (req: Request, res: Response) => {
    const brands = await Brand.findAndCountAll();
    return res.json(brands);
  };
}

export default BrandController;
