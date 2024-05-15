import { AiOutlineDollar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl p-4">
      <figure>
        <img className="w-52" src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="px-4 py-1 font-bold mr-4 text-xl gradient-text gradient-border">
            {remote_or_onsite}
          </button>
          <button className="px-4 py-1 font-bold mr-4 text-xl gradient-text gradient-border">
            {job_type}
          </button>
        </div>
        <div className="flex mt-4">
          <h2 className="flex mr-4">
            <MdLocationOn className="text-2xl mr-2"></MdLocationOn> {location}
          </h2>
          <h2 className="flex">
            <AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar> {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
          <button className="btn btn-primary rounded border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white font-semibold shadow-md hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 hover:text-gray-100 hover:shadow-lg transition-all duration-300 ease-in-out h-12 w-36">
            View Details
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
