import { filterPreview } from "../../utils/filters";
import { type GamePreview } from "../../utils/types";
import { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";

export default function Filter({
  title,
  filter,
  slug,
  setGames,
  setTitle,
  setActive,
}: {
  title: string;
  filter: string;
  slug: string;
  setGames: Dispatch<SetStateAction<GamePreview[] | null>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setActive: Dispatch<SetStateAction<boolean>>;
}) {
  function handleFilter() {
    // Clear old games.
    setGames(null);

    // Clear mobile nav.
    setActive(false);

    async function callGame() {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?${filter}&key=5298ccfc499d4faa98c321831cf6252d`
        );
        const data = await res.json();

        setTitle(title);
        setGames(filterPreview(data.results));
      } catch {
        return <div>Error has occured.</div>;
      }
    }

    callGame();
  }

  return (
    <Link
      to={slug === "" ? "" : `?type=${slug}`}
      className="text-sm md:text-xl text-gray-2 hover:text-white"
      onClick={handleFilter}
    >
      {title}
    </Link>
  );
}
