//example: https://api.themoviedb.org/3/movie/550?api_key=0fc168dc8bd7fb28d15e8ca6a05b0876

import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance
