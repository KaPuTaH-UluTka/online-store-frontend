import React, { useContext } from 'react';
import { Context } from '../../index';
import { observer } from 'mobx-react-lite';
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

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  const setType = (event: SelectChangeEvent<unknown>) => {
    const value = event.target.value;
    device?.setSelectedType(JSON.parse(value as string));
  };

  return (
    <Container>
      <Typography sx={{ mt: 4, mb: 2 }} color={'primary'} variant="h6" component="div">
        Choose type
      </Typography>

      <FormControl sx={{ m: 1, minWidth: 150 }} variant="standard">
        <InputLabel id="type-select-label" sx={{ color: mainWhite }}>
          Type
        </InputLabel>
        <StyledSelect
          labelId="type-select-label"
          value={device?.selectedType?.name}
          onChange={setType}
          color={'primary'}
          inputProps={{ 'aria-label': 'Without label' }}
          MenuProps={styledSelectProps}
        >
          {device?.types.map((type) => {
            return (
              <MenuItem value={JSON.stringify(type)} key={type.id}>
                {type.name}
              </MenuItem>
            );
          })}
        </StyledSelect>
      </FormControl>
    </Container>
  );
});

export default TypeBar;
