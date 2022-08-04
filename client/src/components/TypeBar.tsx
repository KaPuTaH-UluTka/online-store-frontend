import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { List, ListItemButton, Typography } from '@mui/material';

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <List>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Choose type
      </Typography>
      {device?.types.map((type) => {
        return (
          <ListItemButton
            className={'mt-1'}
            style={{ cursor: 'pointer' }}
            selected={type.id === device?.selectedType?.id}
            onClick={() => device?.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListItemButton>
        );
      })}
    </List>
  );
});

export default TypeBar;
