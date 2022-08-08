import React, { useContext } from 'react';
import { Container, MenuItem, SelectChangeEvent } from '@mui/material';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { StyledSelect, styledSelectProps } from './styledComponents/componentStyles';

const ItemsSettingsBar = observer(() => {
  const { device } = useContext(Context);

  const selectChange = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value;
    device?.setLimit(value as number);
  };

  return (
    <Container sx={{ justifyContent: 'flex-end', display: 'flex' }}>
      <StyledSelect
        value={`${device?.limit}`}
        onChange={selectChange}
        size="small"
        variant={'standard'}
        MenuProps={styledSelectProps}
      >
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={18}>18</MenuItem>
      </StyledSelect>
    </Container>
  );
});

export default ItemsSettingsBar;
