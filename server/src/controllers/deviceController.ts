import { NextFunction, Request, Response } from 'express';
import { v4 } from 'uuid';
import path from 'node:path';
import { Device, DeviceInfo } from '../models/models.js';
import ApiError from '../error/ApiError.js';
import { currDir } from '../utils/path.js';
import { FileArray } from 'express-fileupload';

class DeviceController {
  static create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name, price, brandId, typeId, info } = req.body;

      const { img } = req.files as FileArray;
      const fileName = v4() + '.jpg';
      if ('mv' in img) {
        await img.mv(path.resolve(currDir(import.meta.url), '..', 'static', fileName));
      }
      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });
      if (info) {
        const deviceInfo = JSON.parse(info);
        const currentDevice = device.toJSON();
        deviceInfo.forEach((el: { title: string; description: string }) => {
          DeviceInfo.create({
            title: el.title,
            description: el.description,
            deviceId: currentDevice.id,
          });
        });
      }
      return res.json(device);
    } catch (err) {
      if (err instanceof ApiError) {
        return next(ApiError.badRequest(err.message));
      }
    }
  };

  static getAll = async (req: Request, res: Response) => {
    const { brandId, typeId, limit, page } = req.query;
    const currentPage: number = page ? +page : 1;
    const currentLimit: number = limit ? +limit : 12;
    const offset: number = currentPage * currentLimit - currentLimit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit: currentLimit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({ where: { brandId }, limit: currentLimit, offset });
    }
    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({ where: { typeId }, limit: currentLimit, offset });
    }
    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId, brandId },
        limit: currentLimit,
        offset,
      });
    }
    return res.json(devices);
  };

  static getOne = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: 'info' }],
    });
    if (device) {
      return res.json(device);
    } else {
      return next(ApiError.badRequest('Not found'));
    }
  };

  static deleteOne = async (req: Request, res: Response) => {
    const { id } = req.params;
    await Device.destroy({
      where: { id },
    }).then(function (deletedRecord) {
      if (deletedRecord === 1) {
        res.status(200).json({ message: 'Deleted successfully' });
      } else {
        res.status(404).json({ message: 'Not found' });
      }
    });
  };
}

export default DeviceController;
