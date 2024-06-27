const API_KEY = "AIzaSyAX7-rTQPw4xf_bSksRn0-4-6JMwTtkVy4";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_generes=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_generes=`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_generes=35`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
  fetchDocumentriesMovies: `/discover/movie?api_key=${API_KEY}&with_generes=99`,
};
export default requests;
