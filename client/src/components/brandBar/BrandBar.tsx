import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { Card, Container, Dropdown, DropdownButton } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Container className={'d-flex flex-row align-items-center justify-content-between'}>
      <Container className={'d-flex flex-row'}>
        {device.brands.map((brand) => {
          return (
            <Card
              key={brand.id}
              className={'p-3 m-1'}
              style={{ cursor: 'pointer' }}
              onClick={() => device.setSelectedBrand(brand)}
              border={brand.id === device?.selectedBrand?.id ? 'danger' : 'light'}
            >
              {brand.name}
            </Card>
          );
        })}
      </Container>
      <DropdownButton title={device?.limit}>
        <Dropdown.Item onClick={() => device?.setLimit(12)}>12</Dropdown.Item>
        <Dropdown.Item onClick={() => device?.setLimit(16)}>16</Dropdown.Item>
        <Dropdown.Item onClick={() => device?.setLimit(20)}>20</Dropdown.Item>
      </DropdownButton>
    </Container>
  );
});

export default BrandBar;
