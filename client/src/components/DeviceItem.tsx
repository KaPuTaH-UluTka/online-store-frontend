import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import StarIcon from '../accets/icons/star.svg';
import { IDevice } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/constants';

const DeviceItem = ({ device }: { device: IDevice }) => {
  const history = useNavigate();

  return (
    <Col md={3} className={'mt-3'} onClick={() => history(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={device.img} />
        <div className={'d-flex justify-content-between align-items-center mt-2 text-black-50'}>
          <div>Name</div>
          <div className={'d-flex align-items-center'}>
            <div>{device.rating}</div>
            <Image width={18} height={18} src={StarIcon} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
