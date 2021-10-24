import { API_URL_MOVIE } from "./constants.js";

export const loadMoviePage = async (movieId) => {
  const response = await fetch(`${API_URL_MOVIE}${movieId}`);
  const responseText = await response.text();
  // document.body.innerHTML += responseText;
  console.log("It works!!!!");
  console.log("--------------------------------------------------------------");
  console.log("data =>", responseText);
  console.log("--------------------------------------------------------------");
};
