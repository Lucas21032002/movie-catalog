"use client";

import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../services/tmdb";

export function useMovies() {
  return useQuery({
    queryKey: ["movies"],
    queryFn: getPopularMovies,
  });
}
