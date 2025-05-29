import { useEffect, useState } from "react";

import { updateSearchCount } from "../appwrite";
import { Movie } from "../entities";
import { API } from "../api";

export const useGetFilms = (searchTerm: string) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (query?: string) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = query ? await API.search(query) : await API.getList();

      if (!response.ok) {
        setErrorMessage("Failed to fetch movies!");
        return;
      }

      if (response.ok) {
        const data = await response.json();
        if (data.Response === "False") {
          setErrorMessage(data.Error || "Failed to fetch movies!");
          setMovieList([]);
          return;
        }

        setMovieList(data.results);

        if (query && data.results.length > 0) {
          await updateSearchCount(query, data.results[0]);
        }
      }
    } catch (e) {
      console.log(e);
      setErrorMessage(`Error: ${e}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      fetchData(searchTerm);
    } else {
      fetchData();
    }
  }, [searchTerm]);

  return { errorMessage, movieList, isLoading };
};
