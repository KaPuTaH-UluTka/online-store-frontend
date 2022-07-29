import React, { useState } from 'react';
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants';
import { NavLink, useLocation } from 'react-router-dom';
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite';

const Auth = observer(() => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    if (isLogin) {
      const response = await login(email, password);
    } else {
      const response = await registration(email, password);
    }
  };

  return (
    <Container
      className={'d-flex justify-content-center align-items-center'}
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className={'p-5'}>
        <h2 className={'m-auto'}>{isLogin ? 'Login' : 'Registration'}</h2>
        <Form className={'d-flex flex-column'}>
          <FormControl
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={'my-2'}
            placeholder={'Enter your email'}
          />
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={'my-2'}
            placeholder={'Enter your password'}
            type={'password'}
          />
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
            <Button onClick={signIn} variant={'outline-secondary'}>
              {isLogin ? 'Login' : 'Registration'}
            </Button>
          </Container>
        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
