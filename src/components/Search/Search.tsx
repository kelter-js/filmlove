import { FC } from "react";
import { SearchProps } from "./types";

export const Search: FC<SearchProps> = ({ searchTerm, setSearchTerm }) => (
  <div className="search">
    <div>
      <img src="search.svg" alt="search" />

      <input
        type="text"
        placeholder="Search through thousands of movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  </div>
);
