import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import UserStore from './store/UserStore';
import { defaultStore } from './utils/constants';
import DeviceStore from './store/DeviceStore';

export const Context = createContext(defaultStore);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Context.Provider value={{ user: new UserStore(), device: new DeviceStore() }}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>
);
