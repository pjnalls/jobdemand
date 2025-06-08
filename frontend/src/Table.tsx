import { Checkbox } from './Checkbox';
import type { Table62Table1Data } from './types';

export const Table = ({
  currentData,
  userJobs,
  setUserJobs,
}: {
  currentData: Table62Table1Data[];
  userJobs: Table62Table1Data[];
  setUserJobs: (userJobs: Table62Table1Data[]) => void;
}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{ textAlign: 'left' }}>Rank</th>
          <th style={{ textAlign: 'left' }}>Job Title</th>
          <th style={{ textAlign: 'right' }}>Growth</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((data: Table62Table1Data) => (
          <tr key={`${data.id}-Table62Table1Data`}>
            <td className="checkbox" style={{ textAlign: 'left' }}>
              <Checkbox
                userJobs={userJobs}
                setUserJobs={setUserJobs}
                currentJob={data}
                defaultChecked={userJobs.find((job) => job.id === data.id)?.enabled ?? false}
              />
            </td>
            <td className="job-title">
              {data['2023 National Employment Matrix title']}
            </td>
            <td className="employment-change">
              {data['Employment change, percent, 2023–33']}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
