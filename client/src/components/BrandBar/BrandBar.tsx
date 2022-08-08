import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../../index';
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import { mainWhite } from '../../utils/themes';
import { StyledSelect, styledSelectProps } from '../styledComponents/componentStyles';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  const setBrand = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value;
    device?.setSelectedBrand(JSON.parse(value as string));
  };

  return (
    <Container>
      <Typography sx={{ mt: 4, mb: 2 }} color={'primary'} variant="h6" component="div">
        Choose brand
      </Typography>

      <FormControl sx={{ m: 1, minWidth: 150 }} variant="standard">
        <InputLabel id="type-select-label" sx={{ color: mainWhite }}>
          Brand
        </InputLabel>
        <StyledSelect
          labelId="type-select-label"
          value={device?.selectedBrand?.name}
          onChange={setBrand}
          color={'primary'}
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={styledSelectProps}
        >
          {device?.brands.map((brand) => {
            return (
              <MenuItem value={JSON.stringify(brand)} key={brand.id}>
                {brand.name}
              </MenuItem>
            );
          })}
        </StyledSelect>
      </FormControl>
    </Container>
  );
});

export default BrandBar;
