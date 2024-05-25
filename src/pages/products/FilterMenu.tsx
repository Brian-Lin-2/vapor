import Filter from "./Filter";
import { type GamePreview } from "../../utils/types";
import { Dispatch, SetStateAction, useId, useState } from "react";

export default function FilterMenu({
  setGames,
  setTitle,
}: {
  setGames: Dispatch<SetStateAction<GamePreview[] | null>>;
  setTitle: Dispatch<SetStateAction<string>>;
}) {
  // Date manipulations.
  const date = new Date();

  const last90 = new Date();
  last90.setDate(date.getDate() - 90);

  const last7 = new Date();
  last7.setDate(date.getDate() - 7);

  const year = date.toISOString().slice(0, 4);
  const month = date.toISOString().slice(5, 7);

  const last90Days = last90.toISOString().slice(0, 10);
  const last7Days = last7.toISOString().slice(0, 10);
  const current = date.toISOString().slice(0, 10);

  const [active, setActive] = useState(false);

  // Arrays to store filters.
  const releases = [
    { title: "All games", filter: "", slug: "" },
    {
      title: "This year",
      filter: `dates=${year}-01-01,${year}-12-31`,
      slug: "this-year",
    },
    {
      title: "This month",
      filter: `dates=${year}-${month}-01,${current}`,
      slug: "this-month",
    },
    {
      title: "Last 7 days",
      filter: `dates=${last7Days},${current}`,
      slug: "last-7-days",
    },
    {
      title: "Last 90 days",
      filter: `dates=${last90Days},${current}`,
      slug: "last-90-days",
    },
  ];

  const platforms = [
    { title: "PC", filter: "parent_platforms=1", slug: "pc" },
    { title: "PlayStation", filter: "parent_platforms=2", slug: "playstation" },
    { title: "Xbox One", filter: "parent_platforms=3", slug: "xbox-one" },
    {
      title: "Nintendo Switch",
      filter: "parent_platforms=7",
      slug: "nintendo-switch",
    },
    { title: "Mobile", filter: "parent_platforms=4", slug: "mobile" },
  ];

  const genres = [
    { title: "Action", filter: "genres=action", slug: "action" },
    { title: "Strategy", filter: "genres=strategy", slug: "strategy" },
    { title: "RPG", filter: "genres=role-playing-games-rpg", slug: "rpg" },
    { title: "Shooter", filter: "genres=shooter", slug: "shooter" },
    { title: "Adventure", filter: "genres=adventure", slug: "adventure" },
    { title: "Fantasy", filter: "tags=fantasy", slug: "fantasy" },
    {
      title: "Singleplayer",
      filter: "tags=singleplayer",
      slug: "singleplayer",
    },
    { title: "Multiplayer", filter: "tags=multiplayer", slug: "multiplayer" },
    { title: "Horror", filter: "tags=horror", slug: "horror" },
    { title: "Racing", filter: "genres=racing", slug: "racing" },
    { title: "Sandbox", filter: "tags=sandbox", slug: "sandbox" },
    { title: "Puzzle", filter: "genres=puzzle", slug: "puzzle" },
    { title: "Sports", filter: "genres=sports", slug: "sports" },
  ];

  return (
    <>
      <button
        className="text-3xl font-bold fixed bottom-8 right-8 bg-gray-3 rounded-full px-4 py-1.5 z-10 md:hidden"
        onClick={() => {
          setActive(!active);
        }}
      >
        {active ? "x" : "+"}
      </button>
      <div
        className={`${active ? "grid" : "hidden"} fixed top-0 left-0 w-full bg-gray-3 min-h-screen p-12 grid-cols-2 gap-4 md:bg-black md:relative md:p-0 md:w-[15%] md:flex md:flex-col md:mx-4 md:mt-20`}
      >
        <div>
          <h2 className="text-lg md:text-3xl font-bold mb-1 md:mb-2">New</h2>

          <ul className="flex flex-col md:items-start gap-0.5">
            {releases.map((e) => {
              return (
                <Filter
                  key={useId()}
                  title={e.title}
                  filter={e.filter}
                  slug={e.slug}
                  setGames={setGames}
                  setTitle={setTitle}
                  setActive={setActive}
                ></Filter>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="text-lg md:text-3xl font-bold mb-1 md:mb-2">
            Platforms
          </h2>
          <ul className="flex flex-col items-start gap-0.5">
            {platforms.map((e) => {
              return (
                <Filter
                  key={useId()}
                  title={e.title}
                  filter={e.filter}
                  slug={e.slug}
                  setGames={setGames}
                  setTitle={setTitle}
                  setActive={setActive}
                ></Filter>
              );
            })}
          </ul>
        </div>

        <div>
          <h2 className="text-lg md:text-3xl font-bold mb-1 md:mb-2">Genres</h2>
          <ul className="flex flex-col items-start gap-0.5">
            {genres.map((e) => {
              return (
                <Filter
                  key={useId()}
                  title={e.title}
                  filter={e.filter}
                  slug={e.slug}
                  setGames={setGames}
                  setTitle={setTitle}
                  setActive={setActive}
                ></Filter>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
