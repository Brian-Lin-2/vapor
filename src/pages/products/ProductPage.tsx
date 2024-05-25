import { useState, useEffect } from "react";
import { type GamePreview } from "../../utils/types";
import { filterPreview } from "../../utils/filters";
import Products from "./Products";
import Loading from "../../components/Loading";
import FilterMenu from "./FilterMenu";

export default function ProductPage() {
  const [games, setGames] = useState<GamePreview[] | null>(null);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function getGames() {
      try {
        const res = await fetch(
          "https://api.rawg.io/api/games?key=5298ccfc499d4faa98c321831cf6252d&page=1"
        );
        const data = await res.json();

        setTitle(data.seo_title);
        setGames(filterPreview(data.results));
      } catch {
        return <div>Error has occured.</div>;
      }
    }

    getGames();
  }, []);

  if (!games) {
    return (
      <div className="text-white flex mx-3 md:mx-6">
        <FilterMenu setGames={setGames} setTitle={setTitle} />
        <Loading />
      </div>
    );
  }

  return (
    <div className="text-white flex mx-3 md:mx-6">
      <FilterMenu setGames={setGames} setTitle={setTitle} />
      <Products games={games} title={title} />
    </div>
  );
}
