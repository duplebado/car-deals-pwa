const generateMovieCard = (movie) => {
  const template = document.querySelector("#movie-card").innerHTML;
  return template.replace(/\${(.*?)}/g, (x, g) => movie[g]);
};

export const appendMovies = (movies) => {
  document.getElementById("first-load").innerHTML = "";
  if (!movies) return;
  const cardHTML = movies.map((m) => generateMovieCard(m)).join("");
  document.querySelector(".mdl-grid").innerHTML += cardHTML;
};
