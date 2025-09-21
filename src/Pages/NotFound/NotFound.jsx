import img404 from "../../../public/NotFoundImg.svg";
import { Link } from "react-router";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";

export default function NotFound() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center flex-col gap-3">
        <img className="w-100" src={img404} alt="" />
        <p className="font-semibold text-primary-700">
          Page you are looking for is Not Found
        </p>
        <Link
          className="btn hover:bg-primary-800 bg-primary-700 text-white transition-colors duration-300"
          to="/"
        >
          Back To Home Page
        </Link>
      </div>
      <NewsLetter/>
      
    </>
  );
}
