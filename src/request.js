const API_KEY = "0fc168dc8bd7fb28d15e8ca6a05b0876";

const request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languaje=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchNetflix: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default request;
