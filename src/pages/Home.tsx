import MediaCenter from "@/components/MediaCenter";
import MovieSlider from "@/components/MovieSlider";
import Subscription from "@/components/Subscription";
import { getNowPlayingMovies } from "@/helpers";
import { useQuery } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import BestMoviesTVShows from "@/components/BestMoviesTVShows";

export default function Home() {
  const navigate = useNavigate();
  const { isPending, isLoading, data, error } = useQuery({
    queryKey: ["get_now_playing_movies"],
    queryFn: getNowPlayingMovies,

    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    gcTime: Infinity,
  });

  if (isLoading || isPending) {
    return (
      <div className="absolute w-full h-full top-0 left-0 flex justify-center items-center">
        <BeatLoader size={64} color="white" />
      </div>
    );
  }

  if (error) {
    navigate("/errorPage");
  }

  if (data) {
    return (
      <div className="">
        <MovieSlider movies={data} />
        <MediaCenter movies={data} />
        <Subscription />
        <BestMoviesTVShows />
      </div>
    );
  }

  return null;
}
