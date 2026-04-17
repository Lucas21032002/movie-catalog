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

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-yellow-400 transition-colors mb-8"
        >
          ← Voltar
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3 shrink-0">
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              width={500}
              height={750}
              className="rounded-xl w-full shadow-2xl"
            />
          </div>

          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{movie.title}</h1>

            <div className="flex items-center gap-4 text-sm text-zinc-400">
              <span>{new Date(movie.release_date).getFullYear()}</span>
              <span className="text-yellow-400 font-semibold">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>
            </div>

            <p className="text-zinc-300 leading-relaxed">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
