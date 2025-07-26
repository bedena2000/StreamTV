import { useNavigate, useParams } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { getMovieById, getNowPlayingMovies, getTrailerById } from "@/helpers";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect, useRef } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";

export default function MovieDetail() {
  const { movieId } = useParams();
  const movieIdInt = Number(movieId);
  const [isMinLoading, setIsMinLoading] = useState(true);
  const navigate = useNavigate();
  const trailerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMinLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const {
    data: movie,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["fetching_movie_by_id", movieId],
    queryFn: () => getMovieById(movieIdInt),
  });

  const { data: movieTrailer } = useQuery({
    queryKey: ["get_trailer_by_id", movieId],
    queryFn: () => getTrailerById(movieIdInt),
  });

  const { data: cachedMovie } = useQuery({
    queryKey: ["get_now_playing_movies"],
    queryFn: getNowPlayingMovies,
  });

  if (isLoading || isMinLoading) {
    return (
      <div className="min-h-screem">
        <div className="customContainer">
          <div className="pt-[190px] flex items-center justify-center">
            <BounceLoader color="white" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    navigate("/errorPage");
  }

  const scrollToTrailer = () => {
    if (trailerRef.current) {
      trailerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (movie && cachedMovie) {
    const genres = movie.genres;
    const originalLanguage = movie.original_language;
    const overview = movie.overview;
    const country = movie["production_countries"];
    const title = movie.title;
    const release_date = movie.release_date;

    let finalTrailer = null;

    if (
      movieTrailer &&
      movieTrailer.results &&
      movieTrailer.results.length > 0
    ) {
      const prefferedTrailer = movieTrailer.results.filter((video: any) => {
        return video.site === "YouTube" && video.official === true;
      });
      const officialTrailer = prefferedTrailer.find((trailer: any) =>
        trailer.name.toLowerCase().includes("official")
      );
      finalTrailer = officialTrailer || prefferedTrailer[0];
    }

    return (
      <div className="min-h-screen text-white">
        <div className="">
          <div
            className="pt-[190px] min-h-screen relative  brightness-200 text-white"
            style={{
              backgroundImage: `url(${
                import.meta.env.VITE_PATH_TO_POSTER
              }original${movie?.backdrop_path})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              filter: "brightness(1)",
            }}
          >
            <div className="lg:w-[800px] w-10/12 m-auto relative z-[2000] bg-emerald-950 rounded-2xl p-4">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-gray-600 font-bold">Title:</p>
                  <p className="text-4xl lg:text-8xl font-mulish">{title}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="px-2 py-1 bg-gray-800 w-auto inline-block ">
                      {originalLanguage}
                    </div>
                    <div className="font-bold text-green-400">
                      {release_date.split("-")[0]}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 font-bold">Description:</p>
                  <p className="font-mulish font-semibold">{overview}</p>
                </div>

                <div>
                  <p className="text-gray-600 font-bold">Genres:</p>

                  <div className="flex flex-wrap gap-4 items-center mt-2">
                    {genres.map((genre: { id: number; name: string }) => (
                      <div
                        key={genre.id}
                        className="px-2 py-1 bg-blue-900 rounded-md"
                      >
                        {genre.name}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-gray-600 font-bold">Countries:</p>
                  <div className="flex flex-wrap gap-4 items-center mt-2">
                    {country.map(
                      (country: { iso_3166_1: string; name: string }) => (
                        <div
                          key={country.name}
                          className="px-2 py-1 bg-blue-900 rounded-md"
                        >
                          {country.name}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div
              onClick={scrollToTrailer}
              className="cursor-pointer inline-block bg-emerald-700 hover:bg-emerald-900 px-2 py-4 rounded-2xl absolute bottom-6 left-1/2 right-1/2 w-[40px] text-center"
            >
              <FaLongArrowAltDown color="white" className="m-auto" />
            </div>
          </div>

          <div className="customContainer" ref={trailerRef}>
            <div className="mt-8 mb-16">
              <div>
                <p className="text-white font-bold text-4xl">Trailer</p>

                <div className="mt-8">
                  <iframe
                    src={`https://www.youtube.com/embed/${finalTrailer?.key}`}
                    className="w-full h-[600px]"
                    title={`${movie.title} Title`}
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="mt-[140px] mb-24">
              {cachedMovie && <MovieList movies={cachedMovie.results} />}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
