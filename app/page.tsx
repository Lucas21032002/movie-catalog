"use client";

import { useState } from "react";
import { SearchBar } from "./components/search-bar";
import MovieList from "./components/movie-list";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold tracking-tight mb-3">
            🎬 Movie <span className="text-yellow-400">Catalog</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Descubra os filmes mais populares do momento
          </p>
        </div>
        <div className="max-w-xl mx-auto mb-10">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        <MovieList search={search} />
      </div>
    </div>
  );
}
