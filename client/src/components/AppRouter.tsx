import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes/routes';
import { SHOP_ROUTE } from '../utils/constants';
import { Context } from '../index';

const AppRouter = () => {
  const { user } = useContext(Context);
  return (
    <Routes>
      <>
        {user._isAuth &&
          authRoutes.map(({ path, Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })}
        {publicRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
        <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
      </>
    </Routes>
  );
};

export default AppRouter;
