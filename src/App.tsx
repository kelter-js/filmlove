import { useState } from "react";

import { useGetTrendingMovies } from "./hooks/useGetTrendingMovies";
import { MovieList } from "./components/MovieList";
import { useDebounce } from "./hooks/useDebounce";
import { useGetFilms } from "./hooks/useGetFilms";
import { Search } from "./components/Search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  const { errorMessage, movieList, isLoading } =
    useGetFilms(debouncedSearchTerm);

  const trendingMovies = useGetTrendingMovies();

  return (
    <main className="main-container">
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You`ll Enjoy
            Without the Hassle
          </h1>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2>Trending Movies</h2>

            <ul>
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id}>
                  <p>{index + 1}</p>
                  <img src={movie.poster_url} alt={movie.title} />
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="all-movies">
          <h2>All Movies</h2>

          <MovieList
            isLoading={isLoading}
            errorMessage={errorMessage}
            movies={movieList || []}
          />
        </section>
      </div>
    </main>
  );
};

export default App;
