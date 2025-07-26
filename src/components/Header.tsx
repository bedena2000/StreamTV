import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { isUrlMatch } from "@/helpers";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <div className="customContainer absolute left-1/2 -translate-x-1/2 top-0 w-full h-[96px] flex items-center justify-between z-100">
      <div className="flex items-center gap-[62px]">
        <div>
          <h2 className="font-semibold text-[32px] font-barlow">StreamTV</h2>
        </div>

        <div className="hidden font-barlow font-normal md:flex items-center gap-[32px]">
          <div className="relative ">
            <Link
              className={`${isUrlMatch("/", pathname) && "font-semibold"}`}
              to="/"
            >
              Home
            </Link>
            {isUrlMatch("/", pathname) && (
              <div className="w-full h-[2px] bg-[#5800C4]"></div>
            )}
          </div>
          <div className="relative ">
            <Link
              className={`${
                isUrlMatch("/movies", pathname) && "font-semibold"
              }`}
              to="/movies"
            >
              Movies
            </Link>
            {isUrlMatch("/movies", pathname) && (
              <div className="w-full h-[2px] bg-[#5800C4]"></div>
            )}
          </div>
        </div>
      </div>

      <div>
        <Link className="hidden md:block" to="/movies">
          <CiSearch size={28} className="cursor-pointer" />
        </Link>

        <div className="md:hidden dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost rounded-field"
          >
            <RxHamburgerMenu size={24} />
          </div>
          <ul
            tabIndex={0}
            className="menu font-barlow dropdown-content bg-[#312119] rounded-box z-1 mt-4 w-52 p-2 shadow-sm"
          >
            <li>
              <Link
                className={`${
                  isUrlMatch("/", pathname) && "font-semibold bg-[#5d4231]"
                } `}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  isUrlMatch("/movies", pathname) &&
                  "font-semibold bg-[#5d4231]"
                }`}
                to="/movies"
              >
                Movies
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  isUrlMatch("/tvshows", pathname) &&
                  "font-semibold bg-[#5d4231]"
                }`}
                to="/tvshows"
              >
                Tvshows
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  isUrlMatch("/catalogue", pathname) &&
                  "font-semibold bg-[#5d4231]"
                }`}
                to="/catalogue"
              >
                Catalogue
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  isUrlMatch("/search", pathname) &&
                  "font-semibold bg-[#5d4231]"
                }`}
                to="/search"
              >
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
