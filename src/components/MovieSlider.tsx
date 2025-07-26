import SliderWrapper from "@/components/SliderWrapper";

export default function MovieSlider({ movies }: { movies: any }) {
  return (
    <div>
      <SliderWrapper movies={movies?.results.slice(0, 5)} />
    </div>
  );
}
