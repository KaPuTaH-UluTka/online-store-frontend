import UserStore from '../store/UserStore';
import DeviceStore from '../store/DeviceStore';

export const ADMIN_ROUTE = '/admin';
export const LOGIN_ROUTE = '/login';
export const REGISTRATION_ROUTE = '/registration';
export const BASKET_ROUTE = '/basket';
export const DEVICE_ROUTE = '/device';
export const SHOP_ROUTE = '/';

export const defaultStore = {
  user: new UserStore() || null,
  device: new DeviceStore() || null,
};
