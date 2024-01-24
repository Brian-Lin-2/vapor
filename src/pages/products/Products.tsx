import { type Game } from "../../utils/types";
import ProductCard from "./ProductCard";

export default function Products({ games }: { games: Game[] }) {
  return (
    <ul className="text-white">
      {games.map((game: Game) => {
        return <ProductCard key={game.id} game={game} />;
      })}
    </ul>
  );
}
