import { useState, useEffect } from "react";
import { type Game } from "../../utils/types";
import Products from "./Products";

export default function ProductPage() {
  const [games, setGames] = useState<Game[] | null>(null);

  useEffect(() => {
    async function getGames() {
      const res = await fetch(
        "https://api.rawg.io/api/games?key=5298ccfc499d4faa98c321831cf6252d&page=1"
      );
      const data = await res.json();
      console.log(data);

      const filteredData: Game[] = data.results.map((game: Game) => ({
        id: game.id,
        name: game.name,
        rating: game.rating,
        rating_max: game.rating_top,
        ratings_count: game.ratings_count,
        released: game.released,
        background_image: game.background_image,
        short_screenshots: game.short_screenshots,
        slug: game.slug,
        parent_platforms: game.parent_platforms,
        tags: game.tags,
        // Hard coded for now.
        price: "$49.99",
      }));

      setGames(filteredData.slice(0, 1));
    }

    getGames();
  }, []);

  if (!games) {
    return <div>Loading</div>;
  }

  return (
    <div className="text-white">
      <Products games={games} />
    </div>
  );
}
