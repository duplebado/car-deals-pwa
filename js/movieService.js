import { API_URL_IN_THEATERS } from "./constants.js";
import { appendMovies } from "./template.js";

export const loadMovies = async () => {
  const response = await fetch(API_URL_IN_THEATERS);

  const data = await response.json();
  console.log("Data =>", data);
  appendMovies(data.items);
};
