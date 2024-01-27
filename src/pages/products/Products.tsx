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
    <>
      <h1 className="uppercase text-4xl text-center font-bold mt-4 mb-8 md:text-5xl">
        {title}
      </h1>
      <ul className="text-white mx-6 mb-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {games.map((game: GamePreview) => {
          return <ProductCard key={game.id} game={game} />;
        })}
      </ul>
    </>
  );
}
