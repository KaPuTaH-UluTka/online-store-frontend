import React, { useContext } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { IDevice } from '../types/types';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../utils/constants';
import { deleteDevice } from '../http/deviceAPI';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { Button, Card, CardMedia, Container, Typography } from '@mui/material';
import { mainWhite, mainYellow } from '../utils/themes';

const DeviceItem = observer(({ deviceItem }: { deviceItem: IDevice }) => {
  const history = useNavigate();
  const { device } = useContext(Context);

  const delDevice = async (id: number) => {
    await deleteDevice(id);
    device?.deleteDevice(id);
  };

  return (
    <Container sx={{ width: 220, p: 1 }}>
      <Card
        sx={{ width: 200, height: 300, cursor: 'pointer', backgroundColor: 'transparent' }}
        onClick={() => history(DEVICE_ROUTE + '/' + deviceItem.id)}
      >
        <CardMedia
          component="img"
          height="200"
          image={process.env.REACT_APP_API_URL + deviceItem.img}
        />
        <div className={'d-flex justify-content-between align-items-center mt-2 text-black-50'}>
          <Typography typography={'h6'} color={mainYellow} sx={{ pl: 1 }}>
            {deviceItem.name}
          </Typography>
          <Container
            sx={{
              display: 'flex',
              alignItems: 'center',
              px: { sm: 0 },
              width: 30,
              mr: 1,
            }}
          >
            <Typography color={mainWhite}>{deviceItem.rating}</Typography>
            <StarBorderIcon sx={{ w: 18, h: 18, color: mainWhite }} />
          </Container>
        </div>
        <Typography color={mainWhite} sx={{ pl: 1 }}>
          {deviceItem.price + ' р'}
        </Typography>
      </Card>
      <Button variant="outlined" onClick={() => delDevice(deviceItem.id)}>
        del
      </Button>
    </Container>
  );
});

export default DeviceItem;
