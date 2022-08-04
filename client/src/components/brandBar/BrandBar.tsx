import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import { List, ListItemButton, Typography } from '@mui/material';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <List>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Choose brand
      </Typography>
      {device.brands.map((brand) => {
        return (
          <ListItemButton
            key={brand.id}
            color={'primary'}
            selected={brand.id === device?.selectedBrand?.id}
            onClick={() => device.setSelectedBrand(brand)}
          >
            {brand.name}
          </ListItemButton>
        );
      })}
    </List>
  );
});

export default BrandBar;
