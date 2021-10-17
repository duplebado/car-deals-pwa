import { loadMovies } from "./movieService.js";
import { loadMoviePage } from "./moviePageService.js";

window.pageEvents = {
  loadMoviePage,
};
loadMovies();
