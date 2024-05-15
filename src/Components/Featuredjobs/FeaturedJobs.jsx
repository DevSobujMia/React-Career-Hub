import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const [dataLength, setDataLength] = useState(4);

    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])


  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {
            jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
      <div className="flex justify-center my-10">
      <div className={dataLength === jobs.length ? 'hidden' : ''}>
        <button onClick={() => setDataLength(jobs.length)} className="btn btn-primary rounded border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white font-semibold shadow-md hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out h-16 w-44">Show All Jobs</button>
      </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
