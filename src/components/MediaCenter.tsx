import MovieListSlider from "@/components/MovieListSlider";

export default function MediaCenter({ movies }: { movies: any }) {
  return (
    <div className="font-barlow -translate-y-[290px] relative z-200">
      <div className="customContainer">
        <h3 className="text-white mb-6 text-[32px] font-medium ">
          Media Center
        </h3>

        <button className="btn px-6 py-1.5 bg-[#5800C4] border-none text-base font-normal mb-[30px] rounded-[56px]">
          Watch for free
        </button>

        <MovieListSlider movies={[movies]} />
      </div>
    </div>
  );
}
