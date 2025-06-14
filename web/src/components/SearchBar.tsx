import { useState } from 'react';
import './SearchBar.css';
import type { Table62Table1Data } from '@/src/types';

const SearchBar = ({
  setCurrentJobData,
  sortedTable62Table1Data,
  filteredJobs,
  setFilteredJobs,
  sliceData,
  currentPage,
  itemsPerPage,
}: {
  setCurrentJobData: (currentJobData: Table62Table1Data[]) => void;
  sortedTable62Table1Data: Table62Table1Data[];
  filteredJobs: Table62Table1Data[];
  setFilteredJobs: (filteredJobs: Table62Table1Data[]) => void;
  sliceData: (
    data: Table62Table1Data[],
    page: number,
    itemsPerPage: number
  ) => Table62Table1Data[];
  currentPage: number;
  itemsPerPage: number;
}) => {
  const [search, setSearch] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleOnClick = () => {
    setFilteredJobs(
      sortedTable62Table1Data.filter((job) =>
        job['2023 National Employment Matrix title']
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    );
    setCurrentJobData(sliceData(filteredJobs, currentPage, itemsPerPage));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a job"
        onChange={handleOnChange}
        pattern="[a-zA-Z0-9\s]+"
        value={search}
        maxLength={100}
      />
      <button onClick={handleOnClick}>Search</button>
    </div>
  );
};

export default SearchBar;
