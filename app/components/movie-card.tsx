"use client";

import Link from "next/link";
import { Movie } from "../types/movie";

export default function MovieCard(movie: Movie) {
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "—";

  const rating = movie.vote_average?.toFixed(1);

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="group relative rounded-xl overflow-hidden bg-zinc-900 hover:ring-2 hover:ring-yellow-400 transition-all duration-300 cursor-pointer">
        <div className="aspect-[2/3] overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="absolute top-2 right-2 bg-black/70 text-yellow-400 text-xs font-bold px-2 py-1 rounded-lg backdrop-blur-sm">
          ⭐ {rating}
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3">
          <h3 className="text-white font-semibold text-sm truncate">
            {movie.title}
          </h3>
          <span className="text-zinc-400 text-xs">{year}</span>
        </div>
      </div>
    </Link>
  );
}
