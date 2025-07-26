import type { Movie } from "@/types";
import { FaRegPlayCircle } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper";
import CurrentSliderCircle from "@/components/CurrentSliderCircle";

import "swiper/swiper-bundle.css";
import { useNavigate } from "react-router-dom";

export default function SliderWrapper({ movies }: {movies: any}) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const changeSliderIndex = (newIndex: number) => {
    swiperRef.current?.slideToLoop(newIndex);
  };

  const handleMovie = (movieId: number) => {
    navigate(`/movie_detail/${movieId}`);
  };

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {movies.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <div className={`relative pt-[190px] pb-[190px] min-h-screen `}>
              <div
                style={{
                  backgroundImage: `url(${
                    import.meta.env.VITE_PATH_TO_POSTER
                  }original${movie?.backdrop_path})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  filter: "brightness(0.6)",
                }}
                className="absolute top-0 left-0 w-full h-full z-10"
              ></div>
              <div className="customContainer relative z-20">
                <p className="text-white font-barlow font-medium text-[40px] mb-2 w-200">
                  {movie.title}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <p className="font-bold rounded-[10px] bg-white text-black px-1 py-1">
                    {movie["original_language"].toUpperCase()}
                  </p>
                  <div>
                    <div>⭐</div>
                  </div>
                </div>

                <div className="w-[200px] mb-4 line-clamp-4">
                  {movie.overview}
                </div>

                <button
                  onClick={() => handleMovie(movie.id)}
                  className="btn bg-[#5800C4] px-6 outline-none border-none rounded-[40px] text-white"
                >
                  <FaRegPlayCircle size={24} color="white" />
                  <p>Play</p>
                </button>

                <div className="mt-20 flex justify-between items-center">
                  <div>
                    <CurrentSliderCircle
                      changeCurrentSliderIndex={changeSliderIndex}
                      currentSlider={activeIndex}
                    />
                  </div>

                  <div className="flex items-center gap-4">
                    <IoIosArrowBack
                      className="cursor-pointer"
                      size={24}
                      color="white"
                      onClick={() => swiperRef.current?.slidePrev()}
                    />
                    <IoIosArrowForward
                      className="cursor-pointer"
                      size={24}
                      color="white"
                      onClick={() => swiperRef.current?.slideNext()}
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
