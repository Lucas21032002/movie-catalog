"use client";

import Link from "next/link";

export default function MovieCard({ movie }: { movie: any }) {
  const year = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "—";

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <Link href={`/movie/${movie.id}`} key={movie.id}>
        <div className="group bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-[2/3] overflow-hidden bg-muted">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "/placeholder.png"
              }
              alt={movie.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="eager"
            />
          </div>
          <div className="p-3">
            <h3 className="font-semibold text-sm text-black truncate">
              {movie.title}
            </h3>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-black">{year}</span>
              <button className="text-xs font-medium text-white bg-blue-500 px-2 py-1 rounded hover:bg-blue-600 transition-colors duration-300">
                Detalhes
              </button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
