import React from 'react';
import { Button, Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { REGISTRATION_ROUTE } from '../utils/constants';
import { NavLink } from 'react-router-dom';

const Auth = () => {
  return (
    <Container
      className={'d-flex justify-content-center align-items-center'}
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className={'p-5'}>
        <h2 className={'m-auto'}>Login</h2>
        <Form className={'d-flex flex-column'}>
          <FormControl className={'my-2'} placeholder={'Enter your email'} />
          <FormControl className={'my-2'} placeholder={'Enter your password'} />
          <Row className={'d-flex flex-row justify-content-between mt-3 px-3'}>
            <div className="">
              Dont have an account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
            </div>
            <Button variant={'outline-secondary'}>Login</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
