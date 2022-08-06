import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { Pagination } from '@mui/material';
import { mainWhite } from '../utils/themes';

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pagesCount = Math.ceil(device?.totalCount / device?.limit);
  const pages: number[] = [];
  const [page, setPage] = useState(device?.page);

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    device?.setPage(value);
  };

  return (
    <Pagination
      sx={{ p: 3, display: 'flex', justifyContent: 'flex-end' }}
      color={'primary'}
      count={pagesCount}
      page={page}
      onChange={handleChange}
      showFirstButton
      showLastButton
    />
  );
});

export default Pages;
