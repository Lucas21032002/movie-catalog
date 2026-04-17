interface Props {
  search: string;
}

export default function EmptyContent({ search }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
      <span className="text-6xl">🎬</span>
      <h2 className="text-xl font-semibold text-white">
        Nenhum filme encontrado
      </h2>
      <p className="text-zinc-400 text-sm">
        Não encontramos resultados para{" "}
        <span className="text-yellow-400 font-medium">"{search}"</span>.
        <br />
        Tente buscar por outro título.
      </p>
    </div>
  );
}
