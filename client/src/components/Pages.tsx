import React, { useContext } from 'react';
import { Context } from '../index';
import { Pagination } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pagesCount = Math.ceil(device?.totalCount / device?.limit);
  const pages = [];

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination>
      <Pagination.First />
      <Pagination.Prev />
      {pages.map((page) => {
        return (
          <Pagination.Item
            key={page}
            active={device.page === page}
            onClick={() => device?.setPage(page)}
          >
            {page}
          </Pagination.Item>
        );
      })}

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
});

export default Pages;
