"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useMovieDetails } from "../../hooks/use-movies-details";
import Link from "next/dist/client/link";

export default function MovieDetailsPage() {
  const params = useParams();
  const id = params.id as string;

  const { data: movie, isLoading, isError } = useMovieDetails(id);

  if (isLoading) {
    return <p className="text-center mt-10">Carregando...</p>;
  }

  if (isError || !movie) {
    return <p className="text-center mt-10">Erro ao carregar o filme</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={750}
            className="rounded-lg"
            loading="eager"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-2">{movie.title}</h1>

          <p className="text-gray-500 mb-4">
            {new Date(movie.release_date).getFullYear()}
          </p>

          <p className="text-gray-700 leading-relaxed">{movie.overview}</p>
        </div>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 mb-6 text-sm text-blue-600 hover:underline"
      >
        ← Voltar
      </Link>
    </div>
  );
}
