export interface IUser {
  id: number;
  email: string;
  password: string;
  role: string;
}

export interface IBrand {
  id: number;
  name: string;
}

export interface IType {
  id: number;
  name: string;
}

export interface IDevice {
  id: number;
  name: string;
  price: number;
  rating: number;
  img: string;
  info: IDescription[];
  brandId: string;
  typeId: string;
}

export interface IDescription {
  title: string;
  description: string;
  number: number;
  id?: number;
}
