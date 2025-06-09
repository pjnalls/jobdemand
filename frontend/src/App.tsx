import { useState } from 'react';

import './App.css';
import { Menu } from './Menu';
import { BarChart } from './BarChart';
import type { Table62Table1Data } from './types';

import table62Table1Data from './data/table62Table1Data.json';

function App() {
  const sortedTable62Table1Data = table62Table1Data.sort(
    (a: Table62Table1Data, b: Table62Table1Data) =>
      a['2023 National Employment Matrix title'].localeCompare(
        b['2023 National Employment Matrix title']
      )
  );
  const [userJobs, setUserJobs] = useState<Table62Table1Data[]>([]);

  return (
    <>
      <section>
        <h1 id="menu">📊 Jobdemand</h1>
        <p className="description">
          Pick up to 10 jobs that your interested in or think you'd be good at.
        </p>
        <Menu
          userJobs={userJobs}
          setUserJobs={setUserJobs}
          sortedTable62Table1Data={sortedTable62Table1Data}
        />
      </section>
      <section>
        <h2 id="demand">Demand for Jobs You Picked</h2>
        <BarChart userJobs={userJobs} setUserJobs={setUserJobs} />
      </section>
    </>
  );
}

export default App;
