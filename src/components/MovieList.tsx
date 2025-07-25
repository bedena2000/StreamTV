import type { Movie } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper as SwiperCore } from "swiper";
import "swiper/swiper-bundle.css";
import { useRef } from "react";
import { redirect, useNavigate } from "react-router-dom";

export default function MovieList({ movies }: { movies: Movie[] }) {
  const navigate = useNavigate();

  const swiperRef = useRef<SwiperCore | null>(null);

  const handleMovie = (movieId: number) => {
    navigate(`/movie_detail/${movieId}`);
    console.log(movieId);
  };

  return (
    <div className="mt-8 relative">
      <div className="flex items-center gap-4 absolute right-0 -top-[54px] z-300">
        <IoIosArrowBack
          onClick={() => swiperRef.current?.slidePrev()}
          className="cursor-pointer"
          size={26}
          color="white"
        />
        <IoIosArrowForward
          onClick={() => swiperRef.current?.slideNext()}
          className="cursor-pointer"
          size={26}
          color="white"
        />
      </div>
      <Swiper
        slidesPerView={1}
        className="relative"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        breakpoints={{
          1180: {
            slidesPerView: 6,
            spaceBetween: 16,
          },
          960: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          760: {
            slidesPerView: 4,
            spaceBetween: 10,
          },

          600: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          420: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
      >
        {movies.map((movie: Movie) => (
          <SwiperSlide
            className="cursor-pointer"
            onClick={() => handleMovie(movie.id)}
          >
            <div className="relative w-full h-[180px] p-[20px] flex items-end rounded-[40px] overflow-hidden">
              <img
                src={`${import.meta.env.VITE_PATH_TO_POSTER}original${
                  movie?.backdrop_path
                }`}
                alt={movie.title}
                className="w-full h-full absolute top-0 left-0 object-cover hover:scale-125 transition-all delay-75 ease-linear"
              />
              <p className="text-white/70 font-barlow z-200 text-[14px]">
                {movie.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
