import React, { useState } from 'react';
import CreateType from '../components/modals/CreateType';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import { Button, Container } from '@mui/material';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
  return (
    <Container sx={{ mt: 8, p: 1, display: 'flex', flexDirection: 'column' }}>
      <Button onClick={() => setTypeVisible(true)} className={'mt-2 p-2'}>
        Add type
      </Button>
      <Button onClick={() => setBrandVisible(true)} className={'mt-2 p-2'}>
        Add brand
      </Button>
      <Button onClick={() => setDeviceVisible(true)} className={'mt-2 p-2'}>
        Add device
      </Button>
      <CreateType show={typeVisible} onHide={async () => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={async () => setBrandVisible(false)} />
      <CreateDevice show={deviceVisible} onHide={async () => setDeviceVisible(false)} />
    </Container>
  );
};

export default Admin;
