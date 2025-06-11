import { useState } from 'react';

import './App.css';
import { Menu } from './components/Menu';
import { BarChart } from './components/BarChart';
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
      <section className="section-1">
        <h1 id="menu">📊 Jobdemand</h1>
        <p className="description">
          {userJobs.length === 10
            ? 'Deselect a job you picked or click the "Start Over" button below.'
            : `Pick ${
                userJobs.length === 0 ? '10' : `${10 - userJobs.length} more`
              } jobs that you're interested in or think you'd be good at.`}
        </p>
        <Menu
          userJobs={userJobs}
          setUserJobs={setUserJobs}
          sortedTable62Table1Data={sortedTable62Table1Data}
        />
      </section>
      <section className="section-2">
        <h2 id="demand">Demand for Jobs You Picked</h2>
        <BarChart userJobs={userJobs} setUserJobs={setUserJobs} />
      </section>
    </>
  );
}

export default App;
