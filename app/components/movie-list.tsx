"use client";

import { useMovies } from "../hooks/use-movies";
import MovieCard from "./movie-card";

export default function MovieList({ search }: { search?: string }) {
  const { data: movies, isLoading, isError } = useMovies();

  if (isLoading) return <p>Carregando...</p>;
  if (isError) return <p>Erro ao carregar filmes</p>;

  const filtered = movies.filter((movie: any) =>
    search ? movie.title.toLowerCase().includes(search.toLowerCase()) : true,
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filtered.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
