import axios from "axios";

const baseURL = "https://api.themoviedb.org/3"; // URL dasar API
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTE3MjNjZTU5NTUwNGI1MTAyYmU5OTkxNWY1NGQ0ZSIsInN1YiI6IjY1ZDU5NWViYzhhNWFjMDE3YmUxYTU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D983Eu7i_6rZkossMRi5dMYCvOK6Lgr04-rXhsYH78Q"; // Token autentikasi

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    accept: "application/json",
    Authorization: token,
  },
});

export default axiosInstance;
