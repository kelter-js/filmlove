import { useEffect, useState } from "react";
import { Models } from "appwrite";

import { getTrendingMovies } from "../appwrite";

export const useGetTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<Models.Document[]>([]);

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      if (movies) setTrendingMovies(movies);
    } catch (err) {
      console.log(`Error fetching trending movies: ${err}`);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
  }, []);

  return trendingMovies;
};
