import type { Show } from "@/types";
import type { FC } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tvshowitem: FC<Show> = ({
  name,
  backdrop_path,
  first_air_date,
  original_language,
  overview,
  id,
}) => {
  const navigate = useNavigate();
  const [isHover, setIsHover] = useState(false);

  const handleHover = () => setIsHover(true);
  const handleLeave = () => setIsHover(false);

  const handleRedirect = () => {
    navigate(`/show_detail/${id}`);
  };

  return (
    <div
      className={`h-[420px] relative rounded-[16px] overflow-hidden cursor-pointer border border-gray-400   transition-all ease-linear duration-100 ${
        isHover && "scale-105"
      }`}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onClick={handleRedirect}
    >
      {backdrop_path ? (
        <img
          src={`${import.meta.env.VITE_PATH_TO_POSTER}original${backdrop_path}`}
          alt={name}
          className="w-full h-full object-cover absolute top-0 left-0 z-10"
        />
      ) : (
        <div className="w-full h-full bg-blue-300 flex items-center gap-2 justify-center">
          <MdOutlineErrorOutline size={34} color="white" />
          <p className="font-semibold">Cannot load image</p>
        </div>
      )}

      {isHover && (
        <div className="p-4 absolute top-0 left-0 bg-black/35 z-30 w-full h-full flex flex-col justify-between text-white">
          <div>
            <p className="text-2xl font-semibold text-shadow-2xs">{name}</p>
            <p>{first_air_date.split("-")[0]}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-2xl bg-amber-800 text-white font-semibold rounded-md px-2">{original_language}</p>
            <p className="truncate">
              {overview}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tvshowitem;
