import { type GamePreview } from "../../utils/types";
import ProductCard from "./ProductCard";

export default function Products({
  games,
  title,
}: {
  games: GamePreview[];
  title: string;
}) {
  return (
    <div className="w-full mx-6 mb-6">
      <h1 className="uppercase text-4xl text-center md:text-start font-bold mb-8 md:text-5xl">
        {title}
      </h1>
      <ul className="text-white grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game: GamePreview) => {
          return <ProductCard key={game.id} game={game} />;
        })}
      </ul>
    </div>
  );
}
