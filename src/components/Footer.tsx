import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#000000] py-20">
      <div className="customContainer flex flex-col gap-12 lg:gap-0 lg:flex-row justify-between  font-barlow">
        <div className="flex flex-col items-center text-center lg:text-start lg:items-start justify-between">
          <div>
            <p className="text-white mb-6 font-semibold text-[32px]">
              StreamTV
            </p>
            <p className="sm:w-[416px] text-[14px]">
              Lorem ipsum dolor sit amet, consec tetur adipis cing elit, sed do
              eiusmod tempor incididunt ut labore et.
            </p>
          </div>

          <div>
            <p className="text-white font-semibold text-[18px] mb-6">
              Join Newsletters
            </p>
            <div className="flex items-center justify-between p-3 bg-white/10 w-full  sm:w-[400px] lg:w-full rounded-[8px]">
              <input
                type="text"
                placeholder="Insert your mail here"
                className="text-[14px] text-white/60 outline-none border-none  pr-4"
              />
              <div className="w-[30px] h-[30px] bg-[#5800C4] flex items-center p-2 rounded-[8px] justify-center cursor-pointer">
                <FaLongArrowAltRight size={32} color="white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[70px] sm:justify-center sm:items-center lg:items-start flex-col lg:flex-row">
          <div className="flex text-center sm:text-start flex-col sm:flex-row lg:flex-col gap-8 ">
            <p className="text-white font-semibold">Sitemap</p>

            <Link to="/" className="text-white/30">
              Home
            </Link>

            <Link to="/movies" className="text-white/30">
              Movies
            </Link>

            <Link to="/tvshows" className="text-white/30">
              Tvshows
            </Link>

            <Link to="/catalogue" className="text-white/30">
              Catalogue
            </Link>
          </div>

          <div className="flex text-center sm:text-start flex-col sm:flex-row lg:flex-col gap-8 ">
            <p className="text-white font-semibold">Product</p>

            <Link to="/movies" className="text-white/30">
              Movies
            </Link>

            <Link to="/movies" className="text-white/30">
              TV Show
            </Link>

            <Link to="/movies" className="text-white/30">
              Videos
            </Link>
          </div>

          <div className="flex text-center sm:text-start flex-col sm:flex-row lg:flex-col gap-8 ">
            <p className="text-white font-semibold">Sitemap</p>

            <Link to="/movies" className="text-white/30">
              Bright Studio
            </Link>

            <Link to="/movies" className="text-white/30">
              Bright News
            </Link>

            <Link to="/movies" className="text-white/30">
              Bright TV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
