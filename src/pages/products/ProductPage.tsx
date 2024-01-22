import { useState, useEffect } from "react";
import { type Game } from "../../utils/types";

export default function ProductPage() {
  const [games, setGames] = useState<any>(null);

  useEffect(() => {
    async function getGames() {
      const res = await fetch(
        "https://api.rawg.io/api/games?key=5298ccfc499d4faa98c321831cf6252d&page=1"
      );
      const data = await res.json();

      const filteredData: Game[] = data.results.map((game: Game) => ({
        id: game.id,
        name: game.name,
        rating: game.rating,
        rating_max: game.rating_top,
        ratings_count: game.ratings_count,
        released: game.released,
        screenshots: game.short_screenshots,
        slug: game.slug,
        platforms: game.parent_platforms,
        tags: game.tags,
      }));

      setGames(filteredData);
    }

    getGames();
  }, []);

  if (!games) {
    return <div>Loading</div>;
  }

  console.log(games[0]);

  return (
    <div className="text-white">
      {games.map((game: Game) => {
        return <div key={game.id}>{game.name}</div>;
      })}
    </div>
  );
}
