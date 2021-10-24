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
  document.getElementById("connection-status").innerHTML = await fetchPromise();
  const movies = await getMovies();
  appendMovies(movies);
};

const fetchPromise = () => {
  const promiseRequest = new Promise(async (resolve) => {
    try {
      await loadMoviesRequest();
    } catch (err) {
      resolve("No connection, showing offline results");
    }
    resolve("This connection is OK, showing results");
  });

  const promiseHanging = new Promise((resolve) => {
    setTimeout(
      resolve,
      3000,
      "The connection is hanging, showing offline results"
    );
  });

  return Promise.race([promiseRequest, promiseHanging]);
};
