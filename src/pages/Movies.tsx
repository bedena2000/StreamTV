import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import DropdownList from "@/components/ui/DropdownList";
import { useQuery } from "@tanstack/react-query";
import { getGenres, searchMovie } from "@/helpers";
import type { Genre, Movie } from "@/types";
import { useNavigate } from "react-router-dom";
import MovieListItem from "@/components/ui/MovieListItem";

const years = Array.from({ length: 2025 - 1950 + 1 }, (_, i) =>
  (1950 + i).toString()
);

years.push("any");

export default function Movies() {
  const [selectedYear, setSelectedYear] = useState("2025");
  const [selectedGenre, setSelectedGenre] = useState<string | null>();
  const [selectedGenreId, setSelectedGenreId] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [movieList, setMovieList] = useState([]);

  const handleSearch = (searchItem: string) => {
    setSearchTerm(searchItem);
  };

  const { data, error, isLoading } = useQuery({
    queryKey: ["get_all_genres"],
    queryFn: getGenres,
  });

  const [isModal, setIsModal] = useState(false);

  const handleModal = () => setIsModal(!isModal);

  const handleYearSelect = (year: string) => {
    setSelectedYear(year);
  };

  useEffect(() => {
    const fetchMoviesDefault = async () => {
      try {
        const result = await searchMovie(
          searchTerm,
          selectedYear,
          selectedGenreId
        );
        setMovieList(result.results);
      } catch (error) {
        navigate("/errorPage");
      }
    };

    fetchMoviesDefault();
  }, []);

  const handleGenreSelect = (genreName: string) => {
    if (genreName !== "any") {
      const foundGenre = data.genres.filter(
        (genre: Genre) => genre.name === genreName
      )[0];
      setSelectedGenre(foundGenre.name);
      setSelectedGenreId(foundGenre.id);
    } else {
      setSelectedGenre(genreName);
      setSelectedGenreId(undefined);
    }
  };

  const handleSearchSave = async () => {
    try {
      const result = await searchMovie(
        searchTerm,
        selectedYear,
        selectedGenreId
      );
      setMovieList(result.results);
    } catch (error) {
      navigate("/errorPage");
    }
  };

  return (
    <div>
      <div className="customContainer">
        <div className="pt-[120px]">
          <div className="flex items-stretch gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="input w-full"
              onChange={(event) => handleSearch(event.target.value)}
            />

            <div
              onClick={handleSearchSave}
              className="bg-cyan-950 w-[40px] flex items-center justify-center cursor-pointer rounded-md"
            >
              <IoSearch size={28} />
            </div>
          </div>

          <div className="mt-4">
            <div className="w-[240px] border border-cyan-400 cursor-pointer p-2 rounded-md bg-cyan-950 hover:bg-cyan-900">
              <div
                className="flex items-center justify-between"
                onClick={handleModal}
              >
                <div className="flex items-center gap-4">
                  <LuSettings2 size={24} />
                  <p>Filters</p>
                </div>

                {isModal ? <FaArrowUp /> : <FaArrowDown />}
              </div>

              {isModal && (
                <div className="mt-4 flex flex-col gap-2">
                  <DropdownList
                    name="Year"
                    defaultValue="Year"
                    list={years}
                    setFunction={handleYearSelect}
                    currentSelectedValue={selectedYear}
                  />
                  {data && data.genres && (
                    <DropdownList
                      name="Genre"
                      defaultValue=""
                      list={[
                        ...data.genres.map((genre: Genre) => genre.name),
                        "any",
                      ]}
                      setFunction={handleGenreSelect}
                      currentSelectedValue={selectedGenre}
                    />
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 pb-4">
            {movieList &&
              movieList.length > 0 &&
              movieList.map((movieItem: Movie) => (
                <MovieListItem key={movieItem.id} {...movieItem} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
