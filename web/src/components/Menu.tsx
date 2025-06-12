import { useState } from 'react';
import Pagination from './Pagination';
import type { Table62Table1Data } from '../types';

import { Table } from './Table';

import './Menu.css';

export const Menu = ({
  userJobs,
  setUserJobs,
  sortedTable62Table1Data,
}: {
  userJobs: Table62Table1Data[];
  setUserJobs: (userJobs: Table62Table1Data[]) => void;
  sortedTable62Table1Data: Table62Table1Data[];
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const sliceData = (
    data: Table62Table1Data[],
    page: number,
    itemsPerPage: number
  ) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  const currentData = sliceData(
    sortedTable62Table1Data,
    currentPage,
    itemsPerPage
  );

  return (
    <div className="menu">
      <Table
        currentData={currentData}
        userJobs={userJobs}
        setUserJobs={setUserJobs}
      />
      <Pagination
        dataCount={sortedTable62Table1Data.length}
        perPageCount={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
