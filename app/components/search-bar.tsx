"use client";

import { useEffect, useState } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => onChange(internalValue), 400);
    return () => clearTimeout(timer);
  }, [internalValue, onChange]);

  return (
    <div className="relative w-full">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 text-lg">
        🔍
      </span>
      <input
        type="text"
        placeholder="Buscar filmes..."
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        className="w-full pl-11 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-yellow-400 transition-colors"
      />
    </div>
  );
}
