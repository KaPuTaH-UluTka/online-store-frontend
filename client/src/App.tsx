import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite';
import { Context } from './index';
import { check } from './http/userAPI';
import { IUser } from './types/types';
import { Spinner } from 'react-bootstrap';
import { yellowTheme } from './utils/themes';
import { ThemeProvider } from '@mui/material';

const App = observer(() => {
  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    check()
      .then((data) => {
        user?.setUser(data as IUser);
        user?.setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={'grow'} />;
  }
  return (
    <BrowserRouter>
      <ThemeProvider theme={yellowTheme}>
        <NavBar />
        <AppRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
});

export default App;
