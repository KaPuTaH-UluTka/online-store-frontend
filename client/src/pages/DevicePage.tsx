import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import StarIcon from '../accets/icons/star.svg';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';
import { IDevice } from '../types/types';

const DevicePage = () => {
  const [device, setDevice] = useState<IDevice | null>(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) fetchOneDevice(id).then((data: IDevice) => setDevice(data));
  }, []);
  return (
    <Container className={'mt-3'}>
      {device ? (
        <>
          <Row>
            <Col md={4}>
              <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
            </Col>
            <Col md={4}>
              <Row className={'d-flex align-items-center flex-column'}>
                <h2>{device.name}</h2>
                <div
                  className={'d-flex justify-content-center align-items-center'}
                  style={{
                    background: `url(${StarIcon}) no-repeat center center`,
                    width: 240,
                    height: 240,
                    backgroundSize: 'cover',
                    fontSize: 64,
                  }}
                >
                  {device.rating}
                </div>
              </Row>
            </Col>
            <Col md={4}>
              <Card
                className={
                  'd-flex flex-column justify-content-center align-items-center justify-content-around'
                }
                style={{ width: 300, height: 300, fontSize: 32, border: '3px solid lightgray' }}
              >
                <h3>{device.price}</h3>
                <Button variant={'outline-dark'}>add to cart</Button>
              </Card>
            </Col>
          </Row>
          <Row className={'d-flex flex-column m-3'}>
            <h1>Specification</h1>
            {device.info.map((info, index) => {
              return (
                <Row
                  key={info.id}
                  style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}
                >
                  {info.title}:{info.description}
                </Row>
              );
            })}
          </Row>
        </>
      ) : (
        <div>err</div>
      )}
    </Container>
  );
};

export default DevicePage;
