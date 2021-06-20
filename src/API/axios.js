import axios from 'axios';

const axiosRequester = axios.create({
  baseURL: "https://api.themoviedb.org/3",
})

export const baseImageURL = "https://image.tmdb.org/t/p/original";

export default axiosRequester;