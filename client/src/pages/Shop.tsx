import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/brandBar/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import Pages from '../components/Pages';
import ItemsSettingsBar from '../components/ItemsSettingsBar';
import { Container } from '@mui/material';
import { mainDarkGrey } from '../utils/themes';

const Shop = observer(() => {
  const { device } = useContext(Context);
  useEffect(() => {
    fetchTypes().then((data) => device?.setTypes(data.rows));
    fetchBrands().then((data) => device?.setBrands(data.rows));
    fetchDevices().then((data) => {
      device?.setDevices(data.rows);
      device?.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    if (device?.selectedType && device?.selectedBrand) {
      fetchDevices(
        device?.selectedType.id,
        device?.selectedBrand.id,
        device.page,
        device?.limit
      ).then((data) => {
        device?.setDevices(data.rows);
        device?.setTotalCount(data.count);
      });
    } else {
      fetchDevices(null, null, device.page, device?.limit).then((data) => {
        device?.setDevices(data.rows);
        device?.setTotalCount(data.count);
      });
    }
  }, [device?.page, device?.selectedType, device?.selectedBrand, device?.limit]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar />
          <BrandBar />
        </Col>
        <Col md={9}>
          <ItemsSettingsBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
