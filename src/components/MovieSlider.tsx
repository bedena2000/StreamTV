import { useQuery } from "@tanstack/react-query";
import { getNowPlayingMovies } from "@/helpers";
import { PuffLoader } from "react-spinners";
import SliderWrapper from "@/components/SliderWrapper";
import { Navigate } from "react-router-dom";

export default function MovieSlider({ movies }) {

  return (
    <div>
      <SliderWrapper movies={movies?.results.slice(0, 5)} />
    </div>
  );
}
