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
