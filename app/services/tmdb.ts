import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_BASE_URL,
  params: {
    api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
    language: "pt-BR",
  },
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_ACCESS_TOKEN}`,
  },
});

export const getPopularMovies = async () => {
  const { data } = await api.get("/movie/popular");
  return data.results;
};

export const getMovieDetails = async (movieId: string) => {
  const { data } = await api.get(`/movie/${movieId}`);
  return data;
};
