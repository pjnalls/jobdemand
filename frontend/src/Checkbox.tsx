import { useEffect } from 'react';
import type { Table62Table1Data } from './types';

export const Checkbox = ({
  userJobs,
  setUserJobs,
  currentJob,
  defaultChecked,
}: {
  userJobs: Table62Table1Data[];
  setUserJobs: (userJobs: Table62Table1Data[]) => void;
  currentJob: Table62Table1Data;
  defaultChecked: boolean;
}) => {
  useEffect(() => {
    console.log(userJobs);
  }, [userJobs]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const existingJob = userJobs.find((job) => job.id === currentJob.id);
    if (existingJob) {
      setUserJobs(userJobs.splice(userJobs.indexOf(existingJob), 1));
    } else {
      setUserJobs([
        ...userJobs,
        { ...currentJob, enabled: event.target.checked },
      ]);
    }
    if (userJobs.length >= 9) {
      window.location.href = '#demand';
    }
  };

  return (
    <input
      type="checkbox"
      onChange={handleChange}
      defaultChecked={defaultChecked}
      disabled={userJobs.length >= 10}
    />
  );
};
