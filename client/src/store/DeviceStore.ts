import { makeAutoObservable } from 'mobx';
import { IBrand, IDevice, IType } from '../types/types';

export default class DeviceStore {
  _types: IType[];
  _brands: IBrand[];
  _devices: IDevice[];
  _selectedType: IType | null;
  _selectedBrand: IBrand | null;
  _page: number;
  _totalCount: number;
  _limit: number;
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = null;
    this._selectedBrand = null;
    this._page = 1;
    this._totalCount = 0;
    this._limit = 12;
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

  deleteDevice(id: number) {
    this._devices = this._devices.filter((device) => {
      return device.id !== id;
    });
  }

  setSelectedType(type: IType) {
    this._selectedType = type;
  }

  setSelectedBrand(brand: IBrand) {
    this._selectedBrand = brand;
  }

  setPage(page: number) {
    this._page = page;
  }

  setTotalCount(totalCount: number) {
    this._totalCount = totalCount;
  }

  setLimit(limit: number) {
    this._limit = limit;
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

  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
