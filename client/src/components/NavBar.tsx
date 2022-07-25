import React, { useContext } from 'react';
import { Context } from '../index';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

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
        <NavLink to={'/'}>AllCase</NavLink>
        {user?.isAuth ? (
          <Nav className="ml-auto">
            <Button variant={'outline-light'} onClick={logout}>
              Logout
            </Button>
            <Button variant={'outline-light'} className="mx-4">
              Admin
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button variant={'outline-light'} onClick={login}>
              Login
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
