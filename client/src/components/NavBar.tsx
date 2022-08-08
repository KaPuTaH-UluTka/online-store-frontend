import React, { useContext } from 'react';
import { Context } from '../index';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants';
import { AppBar, Button, Container, Toolbar } from '@mui/material';
import { mainBlack } from '../utils/themes';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const logout = () => {
    user?.setUser(null);
    user?.setIsAuth(false);
    localStorage.removeItem('token');
  };
  return (
    <AppBar sx={{ bgcolor: mainBlack }}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NavLink style={{ color: 'white', textDecoration: 'none', fontSize: '30px' }} to={'/'}>
          AllCase
        </NavLink>
        {user?.isAuth ? (
          <Toolbar>
            <NavLink to={SHOP_ROUTE} style={{ textDecoration: 'none' }}>
              <Button variant={'outlined'} onClick={logout}>
                Logout
              </Button>
            </NavLink>
            <NavLink to={ADMIN_ROUTE} style={{ textDecoration: 'none' }}>
              <Button variant={'outlined'}>Admin</Button>
            </NavLink>
          </Toolbar>
        ) : (
          <Toolbar>
            <NavLink to={LOGIN_ROUTE} style={{ textDecoration: 'none' }}>
              <Button variant={'outlined'}>Login</Button>
            </NavLink>
          </Toolbar>
        )}
      </Container>
    </AppBar>
  );
});

export default NavBar;
