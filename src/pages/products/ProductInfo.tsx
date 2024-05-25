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

  // Edge case for no rating.
  if (info.rating_top == 0) {
    info.rating_top = 5;
  }

  return (
    <div className="mx-6 mt-2 md:mx-20">
      <div className="flex justify-between mx-1">
        <Link
          to=".."
          relative="path"
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
          className={`font-bold border px-3 py-0.5 rounded-full hover:text-black hover:bg-white md:text-lg ${isAdded() && "bg-white text-black"}`}
          onClick={() => {
            addItem(game);
          }}
        >
          {isAdded() ? "Added" : "Add +"}
        </button>
      </div>

      <div className="flex flex-col gap-4 my-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <ImageCarousel images={info.screenshots} />

          <div className="flex flex-col gap-4 md:w-1/2">
            {/* Name / Rating */}
            <div>
              <h1 className="text-3xl font-bold md:text-5xl">{info.name}</h1>
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
            <div>
              <h2 className="text-xl pb-1 border-b md:border-none mb-2 md:mb-0 border-gray-2 md:text-2xl">
                About
              </h2>

              <div>
                <div
                  className={`p-3 rounded md:rounded-2xl bg-gray-3 ${!expand && "h-60 md:h-80 overflow-hidden md:overflow-y-scroll"}`}
                >
                  <p>{description}</p>
                </div>
                <button
                  className="w-full flex justify-center md:hidden"
                  onClick={() => setExpand(!expand)}
                >
                  <img
                    className={`w-8 ${expand && "rotate-180"}`}
                    src="/images/icons/arrow.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="mt-5">
          <h2 className="text-xl md:text-3xl pb-1 border-b mb-2 md:border-none border-gray-2">
            Overview
          </h2>

          <div className="p-3 rounded md:rounded-2xl bg-gray-3 grid grid-cols-2 md:grid-cols-4 gap-y-2 md:p-6 md:gap-y-3">
            <OverviewCard name="ESRB" info={info.esrb_rating?.name} />
            <OverviewCard name="Genre" info={info.genres} />
            <OverviewCard name="Developers" info={info.developers} />
            <OverviewCard name="Publishers" info={info.publishers} />
            <OverviewCard name="Website" info={info.website} />
            <OverviewCard name="Released" info={getDate(info.released)} />
            <OverviewCard name="Tags" info={info.tags} />
            <OverviewCard name="Updated" info={getDate(info.updated)} />
          </div>
        </div>
      </div>
    </div>
  );
}
