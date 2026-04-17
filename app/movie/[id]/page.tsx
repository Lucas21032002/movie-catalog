"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useMovieDetails } from "../../hooks/use-movies-details";

export default function MovieDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: movie, isLoading, isError } = useMovieDetails(id);

  if (isLoading)
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <span className="text-zinc-400 animate-pulse">Carregando...</span>
      </div>
    );

  if (isError || !movie)
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex items-center justify-center">
        <p className="text-red-400">Erro ao carregar o filme.</p>
      </div>
    );

  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const duration = movie.runtime ? `${hours}h ${minutes}m` : null;

  const statusMap: Record<string, string> = {
    Released: "Lançado",
    "Post Production": "Pós-produção",
    "In Production": "Em produção",
    Planned: "Planejado",
    Canceled: "Cancelado",
    Rumored: "Rumor",
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      {movie.backdrop_path && (
        <div className="relative w-full h-72 md:h-96">
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-[#0d0d0d]" />
          <div className="absolute top-4 left-4 z-10 max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-yellow-400 transition-colors bg-black/40 backdrop-blur-sm px-3 py-2 rounded-lg"
            >
              ← Voltar
            </Link>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 shrink-0 -mt-32 md:-mt-48 relative z-10">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
              className="rounded-xl w-full shadow-2xl ring-1 ring-white/10"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold">{movie.title}</h1>
              {movie.tagline && (
                <p className="text-zinc-400 italic mt-1">"{movie.tagline}"</p>
              )}
            </div>

            {movie.genres?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {movie.genres.map((genre: { id: number; name: string }) => (
                  <span
                    key={genre.id}
                    className="text-xs bg-zinc-800 text-zinc-300 border border-zinc-700 px-3 py-1 rounded-full"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
              <span>{new Date(movie.release_date).getFullYear()}</span>
              {duration && <span>🕐 {duration}</span>}
              <span className="text-yellow-400 font-semibold">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>
              <span className="text-zinc-500">
                {movie.vote_count?.toLocaleString("pt-BR")} votos
              </span>
            </div>

            <p className="text-zinc-300 leading-relaxed">{movie.overview}</p>

            <div className="grid grid-cols-2 gap-3 mt-2 text-sm">
              <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                <p className="text-zinc-500 text-xs mb-1">Título original</p>
                <p className="text-white font-medium truncate">
                  {movie.original_title}
                </p>
              </div>
              <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                <p className="text-zinc-500 text-xs mb-1">Idioma original</p>
                <p className="text-white font-medium uppercase">
                  {movie.original_language}
                </p>
              </div>
              <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                <p className="text-zinc-500 text-xs mb-1">Status</p>
                <p className="text-white font-medium">
                  {statusMap[movie.status] ?? movie.status}
                </p>
              </div>
              <div className="bg-zinc-900 rounded-lg p-3 border border-zinc-800">
                <p className="text-zinc-500 text-xs mb-1">Popularidade</p>
                <p className="text-white font-medium">
                  {movie.popularity?.toFixed(0)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
