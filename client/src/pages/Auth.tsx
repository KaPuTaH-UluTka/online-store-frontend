import React from 'react';
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import { NavLink, useLocation } from 'react-router-dom';

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className={'d-flex justify-content-center align-items-center'}
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className={'p-5'}>
        <h2 className={'m-auto'}>{isLogin ? 'Login' : 'Registration'}</h2>
        <Form className={'d-flex flex-column'}>
          <FormControl className={'my-2'} placeholder={'Enter your email'} />
          <FormControl className={'my-2'} placeholder={'Enter your password'} />
          <Container className={'d-flex justify-content-between mt-3'}>
            {isLogin ? (
              <div className="">
                Don&apos;t have an account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
              </div>
            ) : (
              <div className="">
                Have an account? <NavLink to={LOGIN_ROUTE}>Login</NavLink>
              </div>
            )}
            <Button variant={'outline-secondary'}>{isLogin ? 'Login' : 'Registration'}</Button>
          </Container>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
