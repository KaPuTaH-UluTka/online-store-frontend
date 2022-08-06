import React, { useContext } from 'react';
import { Context } from '../index';
import DeviceItem from './DeviceItem';
import { observer } from 'mobx-react-lite';
import { Container } from '@mui/material';
import { mainDarkGrey } from '../utils/themes';

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  return (
    <Container sx={{ display: 'flex', flexWrap: 'wrap', backgroundColor: mainDarkGrey }}>
      {device?.devices.map((deviceItem) => {
        return <DeviceItem key={deviceItem.id} deviceItem={deviceItem} />;
      })}
    </Container>
  );
});

export default DeviceList;
