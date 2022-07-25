import { makeAutoObservable } from 'mobx';
import { IBrand, IDevice, IType } from '../types/types';

export default class DeviceStore {
  _types: IType[];
  _brands: IBrand[];
  _devices: IDevice[];
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    makeAutoObservable(this);
  }

  setTypes(types: IType[]) {
    this._types = types;
  }

  setBrands(brands: IBrand[]) {
    this._brands = brands;
  }

  setDevices(devices: IDevice[]) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
