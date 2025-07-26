import { apiClient } from "@/fetch";

// Check if current url matches urlToCheck
export function isUrlMatch(currentUrl: string, urlToCheck: string) {
  return currentUrl === urlToCheck;
}

// Get now playing movies
export const getNowPlayingMovies = async () => {
  const result = await apiClient.get("movie/now_playing");

  return result.data;
};

// Get popular movies
export const getPopularMovies = async () => {
  const result = await apiClient.get("movie/popular");

  return result.data;
};

// Get popular tv series
export const getPopularTvSeries = async () => {
  const result = await apiClient.get("tv/popular");

  return result.data;
};

// Get top rated tv series
export const getTopRatedTvSeries = async () => {
  const result = await apiClient.get("tv/top_rated");

  return result.data;
};

// Get movie by id
export const getMovieById = async (movieId: number) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}`);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};

// Get trailer by id

export const getTrailerById = async (movieId: number) => {
  try {
    const response = await apiClient.get(`/movie/${movieId}/videos`);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};

// Get all avaliables movie genres
export const getGenres = async () => {
  try {
    const response = await apiClient.get(`/genre/movie/list`);

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};

// Search movie

export const searchMovie = async (
  name: string | "",
  year: string | undefined,
  genreId: number | string | undefined
) => {
  try {
    let response;

    if (!name) {
      response = await apiClient.get(`/discover/movie`);
    } else if (year === "any" && genreId === "any") {
      response = await apiClient.get(`/search/movie?query=${name}`);
    } else if (year === "any" && genreId === undefined) {
      response = await apiClient.get(`/search/movie?query=${name}`);
    } else if (year !== "any" && genreId === undefined) {
      response = await apiClient.get(
        `/search/movie?query=${name}&year=${year}`
      );
    } else if (year === "any" && genreId !== undefined && genreId !== "any") {
      response = await apiClient.get(
        `/search/movie?query=${name}&year=${year}&with_genres=${genreId}`
      );
    } else {
      response = await apiClient.get(
        `/search/movie?query=${name}&year=${year}&with_genres=${genreId}`
      );
    }

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch movie details");
  }
};

// Search TV Shows
export const searchShows = async (
  name: string | "",
  year: string | undefined,
  genreId: number | string | undefined
) => {
  try {
    let response;

    if (!name) {
      response = await apiClient.get(`/discover/tv`);
    } else if (year === "any" && genreId === "any") {
      response = await apiClient.get(`/search/tv?query=${name}`);
    } else if (year === "any" && genreId === undefined) {
      response = await apiClient.get(`/search/tv?query=${name}`);
    } else if (year !== "any" && genreId === undefined) {
      response = await apiClient.get(`/search/tv?query=${name}&year=${year}`);
    } else if (year === "any" && genreId !== undefined && genreId !== "any") {
      response = await apiClient.get(
        `/search/tv?query=${name}&year=${year}&with_genres=${genreId}`
      );
    } else {
      response = await apiClient.get(
        `/search/tv?query=${name}&year=${year}&with_genres=${genreId}`
      );
    }

    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch tv shows details");
  }
};
