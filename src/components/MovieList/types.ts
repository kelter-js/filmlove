import { Movie } from "../../entities";

export interface MovieListProps {
  movies: Movie[];
  errorMessage: string;
  isLoading: boolean;
}
