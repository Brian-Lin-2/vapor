import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Loading from "../../components/Loading";
import { type GameInfo } from "../../utils/types";
import { filterInfo, filterScreenshot } from "../../utils/filters";
import { CartContext } from "../cart/CartContext";
import ImageCarousel from "./ImageCarousel";
import OverviewCard from "./OverviewCard";

export default function ProductInfo() {
  const { items, addItem } = useContext(CartContext);
  const [info, setInfo] = useState<GameInfo | null>(null);
  const game = useLocation().state;
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

  // Check to see if game is added.
  function isAdded() {
    return items.find((e) => e.id == game.id);
  }

  function getDate(dateString: string) {
    const date = new Date(dateString);

    return date.toLocaleDateString();
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
          className={`font-bold border px-3 py-0.5 rounded-full ${isAdded() && "bg-white text-black"}`}
          onClick={() => {
            addItem(game);
          }}
        >
          {isAdded() ? "Added" : "Add +"}
        </button>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        {/* Image */}
        <ImageCarousel images={info.screenshots} />

        {/* Name / Rating */}
        <div>
          <h1 className="text-3xl font-bold">{info.name}</h1>
          <div>
            <span
              className={`before:content-['★★★★★'] bg-clip-text text-transparent mr-1`}
              style={{
                backgroundImage: `linear-gradient(90deg, white ${(info.rating / info.rating_top) * 100}%, gray ${(info.rating_top - info.rating) * 100}%)`,
              }}
            ></span>

            <span className="text-sm underline cursor-pointer hover:text-blue-400">
              {info.rating_count}
            </span>
          </div>
        </div>

        {/* About */}
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

        {/* Overview */}
        <h2 className="text-xl pb-1 border-b border-gray-2">Overview</h2>

        <div className="p-3 rounded bg-gray-3 grid grid-cols-2 gap-y-2">
          <OverviewCard name="ESRB" info={info.esrb_rating.name} />
          <OverviewCard name="Genre" info={info.genres} />
          <OverviewCard name="Tags" info={info.tags} />
          <OverviewCard name="Developers" info={info.developers} />
          <OverviewCard name="Publishers" info={info.publishers} />
          <OverviewCard name="Website" info={info.website} />
          <OverviewCard name="Released" info={getDate(info.released)} />
          <OverviewCard name="Updated" info={getDate(info.updated)} />
        </div>
      </div>
    </div>
  );
}
