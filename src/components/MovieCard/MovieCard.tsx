import { FC } from "react";
import { MovieCardProps } from "./types";

export const MovieCard: FC<MovieCardProps> = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => (
  <div className="movie-card">
    <img
      src={
        poster_path
          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          : "/no-movie.png"
      }
      alt={title}
    />

    <div className="mt-4">
      <h3>{title}</h3>

      <div className="content">
        <div className="rating">
          <img src="star.svg" alt="Star Icon" />

          <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        </div>

        <span>•</span>

        <span className="lang">{original_language}</span>

        <span>•</span>

        <p className="year">
          {release_date ? release_date.split("-")[0] : "N/A"}
        </p>
      </div>
    </div>
  </div>
);
