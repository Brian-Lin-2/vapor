import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Loading from "../../components/Loading";
import { type GameInfo } from "../../utils/types";
import { filterInfo, filterScreenshot } from "../../utils/filters";
import { CartContext } from "../cart/CartContext";

export default function ProductInfo() {
  const { items, addItem } = useContext(CartContext);
  const [info, setInfo] = useState<GameInfo | null>(null);
  const game = useLocation().state;

  // Check to see if it's already added.
  const [added, setAdded] = useState(
    items.find((e) => e.id == game.id) || false
  );

  const [expand, setExpand] = useState(false);

  useEffect(() => {
    let gameInfo: GameInfo;

    async function getInfo() {
      const res = await fetch(
        `https://api.rawg.io/api/games/${game.id}?key=5298ccfc499d4faa98c321831cf6252d`
      );
      const data = await res.json();

      gameInfo = filterInfo(data);
    }

    async function getScreenshots() {
      const res = await fetch(
        `https://api.rawg.io/api/games/${game.id}/screenshots?key=5298ccfc499d4faa98c321831cf6252d`
      );
      const data = await res.json();

      gameInfo = {
        ...gameInfo,
        screenshots: filterScreenshot(data.results),
      };
    }

    getInfo()
      .then(() => getScreenshots())
      .then(() => {
        setInfo(gameInfo);
      });
  }, []);

  if (!info) {
    return <Loading />;
  }

  // Minor text cleaning.
  let description = info.description_raw;
  const breakpoint = info.description_raw.indexOf("Español");

  if (breakpoint > 0) {
    description = description.substring(0, breakpoint);
  }

  return (
    <div className="mx-6 mt-2 md:mx-20">
      <div className="flex justify-between mx-1">
        <Link
          to=".."
          className="flex items-center gap-2 w-20 md:w-23 md:gap-3 font-bold text-xl md:text-2xl"
        >
          <img
            className="w-5 md:w-6"
            src="/images/icons/back-arrow.png"
            alt=""
          />
          <button>Back</button>
        </Link>
        <button
          className={`font-bold border px-3 py-0.5 rounded-full ${added && "bg-white text-black"}`}
          onClick={() => {
            addItem(game);
            setAdded(true);
          }}
        >
          {added ? "Added" : "Add +"}
        </button>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {/* Image */}
        <img
          className="rounded-2xl h-[40vh] object-cover"
          src={info.screenshots[0].image}
          alt="game image"
        ></img>

        {/* Name / Rating */}
        <div>
          <h1 className="text-3xl font-bold">{info.name}</h1>
          <div>
            <span className="mr-1">★★★★★</span>

            <span className="text-sm underline cursor-pointer hover:text-blue-200">
              {info.rating_count}
            </span>
          </div>
        </div>

        <h2 className="text-xl pb-1 border-b border-gray-2">About</h2>

        <div>
          <div
            className={`p-3 rounded bg-gray-3 ${!expand && "h-60 overflow-hidden"}`}
          >
            <p>{description}</p>
          </div>
          <button
            className="w-full flex justify-center"
            onClick={() => setExpand(!expand)}
          >
            <img
              className={`w-8 ${expand && "rotate-180"}`}
              src="/images/icons/arrow.png"
              alt=""
            />
          </button>
        </div>

        {/* <h2>Overview</h2>
        <h3>Genre</h3>
        <h3>Tags</h3>
        <h3>Developers</h3>
        <h3>Released</h3>
        <h3>Updated</h3>
        <h3>Website</h3>
        <h3>ESRB</h3> */}
      </div>
    </div>
  );
}
