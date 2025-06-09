// import { useEffect } from 'react';
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
  // TODO: Remove this after resolving issue with to many rerenders
  // useEffect(() => {
  //   console.log(userJobs);
  // }, [userJobs]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const existingJobIndex = userJobs.findIndex(
      (job) => job.id === currentJob.id
    );
    if (existingJobIndex !== -1) {
      event.target.checked = false;
      userJobs.splice(existingJobIndex, 1);
      setUserJobs(userJobs);
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
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        id={`checkbox-${currentJob.id}-${currentJob['2023 National Employment Matrix title']}`}
        className="checkbox"
        type="checkbox"
        onChange={handleChange}
        defaultChecked={defaultChecked}
        style={{
          cursor:
            userJobs.length >= 10 &&
            !userJobs.find((job) => job.id === currentJob.id)
              ? 'not-allowed'
              : 'pointer',
        }}
        disabled={
          userJobs.length >= 10 &&
          !userJobs.find((job) => job.id === currentJob.id)
        }
      />
      <label
        htmlFor={`checkbox-${currentJob.id}-${currentJob['2023 National Employment Matrix title']}`}
        style={{ color: 'transparent', marginLeft: '0px', fontSize: '1px' }}
      >
        ✅
      </label>
    </div>
  );
};
