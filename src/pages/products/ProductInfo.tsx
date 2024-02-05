import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import { type GameInfo } from "../../utils/types";
import { filterInfo, filterScreenshot } from "../../utils/filters";

export default function ProductInfo() {
  const [info, setInfo] = useState<GameInfo | null>(null);
  const id = useLocation().state.id;

  useEffect(() => {
    let gameInfo: GameInfo;

    async function getInfo() {
      const res = await fetch(
        `https://api.rawg.io/api/games/${id}?key=5298ccfc499d4faa98c321831cf6252d`
      );
      const data = await res.json();

      gameInfo = filterInfo(data);
    }

    async function getScreenshots() {
      const res = await fetch(
        `https://api.rawg.io/api/games/${id}/screenshots?key=5298ccfc499d4faa98c321831cf6252d`
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
        <button className="font-bold border px-3 py-0.5 rounded-full">
          Add +
        </button>
      </div>

      <div className="flex flex-col gap-3 mt-4">
        <img
          className="rounded-2xl h-[40vh] object-cover"
          src={info.screenshots[0].image}
          alt="game image"
        ></img>
        <h1 className="text-3xl font-bold text-center">{info.name}</h1>
        <p>
          {info.rating} / {info.rating_top}
        </p>
        <h2>About</h2>
        <p>
          {info.description_raw.substring(
            0,
            info.description_raw.indexOf("Español")
          )}
        </p>
        <h2>Overview</h2>
        <h3>Rating</h3>
        <h3>Developers</h3>
        <h3>Released</h3>
        <h3>Updated</h3>
        <h3>Website</h3>
        <h3>ESRB</h3>
        <h3>Genre</h3>
        <h3>Tags</h3>
        <h3></h3>
      </div>
    </div>
  );
}
