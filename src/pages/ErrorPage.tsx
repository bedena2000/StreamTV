import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="pt-[190px]">
      <div className="customContainer">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className=" text-xl text-center sm:text-4xl font-bold font-barlow">
            404! Something went wrong
          </p>
          <Link to="/">
            <button className="btn btn-error text-white font-barlow">Get Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
