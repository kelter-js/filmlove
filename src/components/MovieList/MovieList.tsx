import { FC } from "react";
import { MovieListProps } from "./types";
import { MovieCard } from "../MovieCard";
import { Spinner } from "../Spinner";

export const MovieList: FC<MovieListProps> = ({
  movies,
  errorMessage,
  isLoading,
}) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (errorMessage) {
    return <p className="text-red-500">{errorMessage}</p>;
  }

  return (
    <ul>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};
