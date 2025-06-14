import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import type { Table62Table1Data } from '../types';

import { Table } from './Table';

import './Menu.css';
import SearchBar from './SearchBar';

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
  const [filteredJobs, setFilteredJobs] = useState<Table62Table1Data[]>(sortedTable62Table1Data.filter((job) =>
    job['2023 National Employment Matrix title']
      .toLowerCase()
      .includes("")
  ));
  const [currentJobData, setCurrentJobData] = useState<Table62Table1Data[]>(
    sliceData(sortedTable62Table1Data, currentPage, itemsPerPage)
  );
  
  useEffect(() => {
    setCurrentJobData(sliceData(filteredJobs, currentPage, itemsPerPage));
  }, [filteredJobs, currentPage, itemsPerPage]);

  return (
    <div className="menu">
      <div className="search-bar-and-table">
        <SearchBar
          setCurrentJobData={setCurrentJobData}
          sortedTable62Table1Data={sortedTable62Table1Data}
          filteredJobs={filteredJobs}
          setFilteredJobs={setFilteredJobs}
          sliceData={sliceData}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />
        <Table
          currentData={currentJobData}
          userJobs={userJobs}
          setUserJobs={setUserJobs}
        />
      </div>
      <Pagination
        dataCount={filteredJobs.length}
        perPageCount={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
