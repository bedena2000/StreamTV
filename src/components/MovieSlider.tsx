import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "@/helpers";
import { PuffLoader } from "react-spinners";
import SliderWrapper from "@/components/SliderWrapper";

export default function MovieSlider() {
  const { isPending, isLoading, data, error } = useQuery({
    queryKey: ["get_now_playing_movies"],
    queryFn: getNowPlayingMovies,

    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    gcTime: Infinity,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <PuffLoader size={64} color="black" />
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex items-center justify-center">
        <PuffLoader size={64} color="black" />
      </div>
    );
  }

  if (error) return null;

  return (
    <div>
      <SliderWrapper movies={data?.results.slice(0, 5)} />
    </div>
  );
}
