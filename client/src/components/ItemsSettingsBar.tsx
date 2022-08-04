import React, { useContext } from 'react';
import { Container, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const ItemsSettingsBar = observer(() => {
  const { device } = useContext(Context);

  const selectChange = (event: SelectChangeEvent) => {
    device?.setLimit(+event.target.value);
  };

  return (
    <Container sx={{ justifyContent: 'flex-end', display: 'flex' }}>
      <Select
        label={`${device?.limit}`}
        value={`${device?.limit}`}
        onChange={selectChange}
        size="small"
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={20}>20</MenuItem>
      </Select>
    </Container>
  );
});

export default ItemsSettingsBar;
