import { type Game } from "../../utils/types";
import ProductCard from "./ProductCard";

export default function Products({
  games,
  title,
}: {
  games: Game[];
  title: string;
}) {
  return (
    <>
      <h1 className="uppercase text-4xl text-center mt-4 mb-8">{title}</h1>
      <ul className="text-white">
        {games.map((game: Game) => {
          return <ProductCard key={game.id} game={game} />;
        })}
      </ul>
    </>
  );
}
