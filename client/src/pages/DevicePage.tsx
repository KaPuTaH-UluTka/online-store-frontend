import React, { useEffect, useState } from 'react';
import StarIcon from '../accets/icons/star.svg';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceAPI';
import { IDevice } from '../types/types';
import { Button, Card, CardMedia, Container, List, ListItem, Typography } from '@mui/material';

const DevicePage = () => {
  const [device, setDevice] = useState<IDevice | null>(null);
  const { id } = useParams();
  useEffect(() => {
    if (id) fetchOneDevice(id).then((data: IDevice) => setDevice(data));
  }, []);
  return (
    <Container>
      {device ? (
        <>
          <Container sx={{ display: 'flex', flexDirection: 'row' }}>
            <CardMedia
              component="img"
              sx={{ height: 300, width: 300 }}
              image={process.env.REACT_APP_API_URL + device.img}
            />
            <Container className={'d-flex align-items-center flex-column'}>
              <Typography typography={'h2'} color={'primary'}>
                {device.name}
              </Typography>
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
            </Container>
            <Card
              className={
                'd-flex flex-column justify-content-center align-items-center justify-content-around'
              }
              sx={{ width: 300, height: 300, fontSize: 32, border: '3px solid lightgray' }}
            >
              <h3>{device.price}</h3>
              <Button variant={'outlined'}>add to cart</Button>
            </Card>
          </Container>
          <List>
            <Typography typography={'h3'} color={'primary'}>
              Specification
            </Typography>
            {device.info.map((info, index) => {
              return (
                <ListItem
                  key={info.id}
                  sx={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 1 }}
                >
                  {info.title}:{info.description}
                </ListItem>
              );
            })}
          </List>
        </>
      ) : (
        <div>err</div>
      )}
    </Container>
  );
};

export default DevicePage;
