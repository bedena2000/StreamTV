import { useRef, useState } from "react";
import { getPopularMovies, getPopularTvSeries } from "@/helpers";
import { useQuery } from "@tanstack/react-query";
import type { Movie } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { Swiper as SwiperCore } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function BestMoviesTVShows() {
  const [choseList, setChoseList] = useState<"tv-shows" | "movies">("tv-shows");
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperCore | null>(null);

  const {
    isPending: isMoviePending,
    isLoading: isMovieLoading,
    data: movieData,
    error: movieError,
  } = useQuery({
    queryKey: ["get_popular_movies"],
    queryFn: getPopularMovies,

    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    gcTime: Infinity,
  });

  const {
    isPending: isTvPending,
    isLoading: isTvloading,
    data: tvData,
    error: isTvError,
  } = useQuery({
    queryKey: ["get_popular_tv_shows"],
    queryFn: getPopularTvSeries,

    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    gcTime: Infinity,
  });

  const handleMovie = (movieId: number) => {
    navigate(`/movie_detail/${movieId}`);
  };

  const handleTVShow = (tvShowId: number) => {
    navigate(`/movie_detail/${tvShowId}`);
  };

  return (
    <div className="-translate-y-[80px]">
      <div className="customContainer font-barlow">
        <p className="text-white font-medium text-[32px] mb-6">
          Popular Movies & Best TV Shows
        </p>

        <div className="flex items-center gap-[22px] ">
          <button
            onClick={() => setChoseList("tv-shows")}
            className="btn hover:bg-amber-900 bg-transparent border-white/60 rounded-[56px] text-base "
          >
            TV Shows
          </button>
          <button
            onClick={() => setChoseList("movies")}
            className="btn hover:bg-amber-900 bg-transparent border-white/60 rounded-[56px] text-base "
          >
            Best Movie
          </button>
        </div>

        {choseList === "movies" ? (
          <div className="relative">
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
              className="relative mt-6"
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
              {movieData?.results.map((movie: Movie) => {
                return (
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
                );
              })}
            </Swiper>
          </div>
        ) : (
          <div className="relative">
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
              className="relative mt-6"
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
              {tvData?.results.map((tvShow) => {
                return (
                  <SwiperSlide
                    className="cursor-pointer"
                    onClick={() => handleTVShow(tvShow.id)}
                  >
                    <div className="relative w-full h-[180px] p-[20px] flex items-end rounded-[40px] overflow-hidden">
                      <img
                        src={`${import.meta.env.VITE_PATH_TO_POSTER}original${
                          tvShow?.backdrop_path
                        }`}
                        alt={tvShow.name}
                        className="w-full h-full absolute top-0 left-0 object-cover hover:scale-125 transition-all delay-75 ease-linear"
                      />
                      <p className="text-white/70 font-barlow z-200 text-[14px]">
                        {tvShow.name}
                      </p>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
}
