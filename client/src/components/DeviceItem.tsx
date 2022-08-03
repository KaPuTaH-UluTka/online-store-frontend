import React, { useContext, useEffect } from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import StarIcon from '../accets/icons/star.svg';
import { IDevice } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/constants';
import { deleteDevice } from '../http/deviceAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const DeviceItem = observer(({ deviceItem }: { deviceItem: IDevice }) => {
  const history = useNavigate();
  const { device } = useContext(Context);

  const delDevice = async (id: number) => {
    await deleteDevice(id);
    device?.deleteDevice(id);
  };

  return (
    <Col md={3} className={'mt-3'}>
      <Card
        style={{ width: 150, cursor: 'pointer' }}
        border={'light'}
        onClick={() => history(DEVICE_ROUTE + '/' + deviceItem.id)}
      >
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + deviceItem.img} />
        <div className={'d-flex justify-content-between align-items-center mt-2 text-black-50'}>
          <div>{deviceItem.name}</div>
          <div className={'d-flex align-items-center'}>
            <div>{deviceItem.rating}</div>
            <Image width={18} height={18} src={StarIcon} />
          </div>
        </div>
        <div>{deviceItem.price}</div>
      </Card>
      <Button variant="danger" onClick={() => delDevice(deviceItem.id)}>
        del
      </Button>
    </Col>
  );
});

export default DeviceItem;
