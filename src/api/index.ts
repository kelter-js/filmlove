const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const OPTIONS = {
  method: "GET",
  headers: { accept: "application/json", Authorization: `Bearer ${API_KEY}` },
};

export const API = {
  search: async (query: string) =>
    await fetch(
      `${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`,
      OPTIONS
    ),
  getList: async () =>
    await fetch(`${BASE_URL}/discover/movie?sort_by=popularity.desc`, OPTIONS),
};
