const movieInstance = localforage.createInstance({
  name: "movies",
});
let lastIndex = -1;
export const addMovies = async (newMovies) => {
  let movies = [];
  newMovies.forEach((movie) => {
    let obj = {};
    obj.key = movie.imdbID;
    obj.value = movie;
    movies.push(obj);
  });
  await movieInstance.setItems(movies);
};

export const getMovies = async () => {
  const keys = (await movieInstance.keys()).reverse();
  if (lastIndex >= keys.length) return;
  const results = await movieInstance.getItems(keys.splice(lastIndex + 1, 10));
  lastIndex += 10;
  return Object.values(results).reverse();
};

// export const getLastItemId = async () => {
//   const keys = (await movieInstance.keys()).reverse();
//   return keys[lastIndex];
// };
