"use client";
import { useState } from "react";
import { SearchBar } from "./components/search-bar";
import MovieList from "./components/movie-list";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Bem-vindo ao <span className="text-blue-600">Movie Catalog</span>
        </h1>
        <p className="text-2xl text-gray-700 mb-10">
          Descubra os filmes mais populares do momento!
        </p>
        <SearchBar value={search} onChange={setSearch} />
        <MovieList search={search} />
      </main>
    </div>
  );
}
