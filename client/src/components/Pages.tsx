import React, { useContext } from 'react';
import { Context } from '../index';
import { Pagination } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const Pages = observer(() => {
  const { device } = useContext(Context);
  const pagesCount = Math.ceil(device?.totalCount / device?.limit);
  const pages: number[] = [];

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  const prevPage = () => {
    if (device?.page > 1) {
      device?.setPage(device?.page - 1);
    }
  };

  const nextPage = () => {
    if (device?.page < pages.length - 1) {
      device?.setPage(device?.page + 1);
    }
  };

  return (
    <Pagination>
      <Pagination.First onClick={() => device?.setPage(pages[0])} />
      <Pagination.Prev onClick={prevPage} />
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

      <Pagination.Next onClick={nextPage} />
      <Pagination.Last onClick={() => device?.setPage(pages.length - 1)} />
    </Pagination>
  );
});

export default Pages;
