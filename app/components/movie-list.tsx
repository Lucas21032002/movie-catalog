"use client";

import { useMovies } from "../hooks/use-movies";
import EmptyContent from "./empty-content";
import MovieCard from "./movie-card";

export default function MovieList({ search }: { search?: string }) {
  const { data: movies, isLoading, isError } = useMovies();

  if (isLoading)
    return (
      <div className="flex justify-center items-center py-20">
        <span className="text-zinc-400 text-lg animate-pulse">
          Carregando filmes...
        </span>
      </div>
    );

  if (isError)
    return (
      <p className="text-center text-red-400 py-20">Erro ao carregar filmes.</p>
    );

  const filtered = movies.filter((movie: any) =>
    search ? movie.title.toLowerCase().includes(search.toLowerCase()) : true,
  );

  if (filtered.length === 0) return <EmptyContent search={search ?? ""} />;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filtered.map((movie: any) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
