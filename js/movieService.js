import { API_URL } from "./constants.js";
import { appendMovies } from "./template.js";
import { addMovies, getMovies } from "./clientStorage.js";

export const loadMoviesRequest = async () => {
  let nextPage = parseInt(window.localStorage.getItem("pageNumber")) + 1;
  const requestURL = `${API_URL}&page=${nextPage}`;
  const response = await fetch(requestURL);
  const data = await response.json();
  await addMovies(data.Search);
  window.localStorage.setItem("pageNumber", nextPage);
};

export const loadMovies = async () => {
  await loadMoviesRequest();
  const movies = await getMovies();
  appendMovies(movies);
};
