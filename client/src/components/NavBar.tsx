import React, { useContext } from 'react';
import { Context } from '../index';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE } from '../utils/constants';

const NavBar = observer(() => {
  const { user } = useContext(Context);

  const login = () => {
    user?.setIsAuth(true);
  };
  const logout = () => {
    user?.setIsAuth(false);
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white', textDecoration: 'none', fontSize: '30px' }} to={'/'}>
          AllCase
        </NavLink>
        {user?.isAuth ? (
          <Nav className="ml-auto">
            <Button variant={'outline-light'} onClick={logout}>
              Logout
            </Button>
            <Button variant={'outline-light'} className="mx-2">
              Admin
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={'outline-light'}>Login</Button>
            </NavLink>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
