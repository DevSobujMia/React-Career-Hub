import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center my-80">
        <h2 className="text-6xl">Oops..</h2>
        <Link className="btn my-8 text-lg" to="/">Back To Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
