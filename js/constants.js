const GET_MOVIE_DETAILS = "https://imdb-api.com/en/API/Title/";
const API_URL_PATH = "https://www.omdbapi.com/?s=2021&Type=movie&apikey=";
// export const API_URL_PATH = "https://imdb-api.com/en/API/";

const IMDB_API_KEY = "k_likz12fl";
const OMDB_API_KEY = "df88f158";
// const OMDB_API_KEY = "k_12shgdy5";

export const API_URL = `${API_URL_PATH}${OMDB_API_KEY}`;
export const API_URL_IN_THEATERS = `${API_URL_PATH}InTheaters/${IMDB_API_KEY}`;
export const API_URL_MOVIE = `${GET_MOVIE_DETAILS}${IMDB_API_KEY}/`;
