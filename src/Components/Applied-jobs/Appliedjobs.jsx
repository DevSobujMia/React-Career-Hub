import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localstorage";

const Appliedjobs = () => {
  const jobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = (filter) => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs);
    } else {
      const filteredJobs = appliedJobs.filter(job => job.remote_or_onsite.toLowerCase() === filter.toLowerCase());
      setDisplayJobs(filteredJobs);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <Helmet>
        <title>Career Hub | Applied jobs</title>
      </Helmet>
      <h2 className="text-3xl">Applied jobs: {appliedJobs.length}</h2>
      <div className="dropdown">
        <button className="m-1 btn">Filter Jobs</button>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}>
            <button>All</button>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <button>Remote</button>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <button>Onsite</button>
          </li>
        </ul>
      </div>

      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.job_title} - {job.company_name} ({job.remote_or_onsite})
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appliedjobs;
