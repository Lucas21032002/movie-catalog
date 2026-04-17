"use client";

import { useEffect, useState } from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: Props) {
  const [internalValue, setInternalValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(internalValue);
    }, 400);

    return () => clearTimeout(timer);
  }, [internalValue, onChange]);

  return (
    <input
      type="text"
      placeholder="Buscar filmes..."
      value={internalValue}
      onChange={(e) => setInternalValue(e.target.value)}
      className="w-full p-3 border rounded-lg"
    />
  );
}
