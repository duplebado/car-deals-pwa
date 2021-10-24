import { loadMovies } from "./movieService.js";
import { loadMoviePage } from "./moviePageService.js";
window.localStorage.setItem("pageNumber", 0);
window.pageEvents = {
  loadMoviePage,
  loadMovies,
};
loadMovies();
