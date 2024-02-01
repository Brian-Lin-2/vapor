import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import { type GameInfo } from "../../utils/types";
import {
  filterPlatform,
  filterScreenshot,
  filterTag,
  filterCompany,
} from "../../utils/filters";

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
      console.log(data);

      gameInfo = {
        id: data.id,
        name: data.name,
        released: data.released,
        tags: filterTag(data.tags),
        description: data.description_raw,
        platforms: filterPlatform(data.platforms),
        developers: filterCompany(data.developers),
        publishers: filterCompany(data.publishers),
        rating: data.rating,
        rating_top: data.rating_top,
        ratings: data.ratings,
        updated: data.updated,
        website: data.website,
        screenshots: [],
      };
    }

    async function getScreenshots() {
      const res = await fetch(
        `https://api.rawg.io/api/games/${id}/screenshots?key=5298ccfc499d4faa98c321831cf6252d`
      );
      const data = await res.json();
      console.log(data);

      gameInfo = {
        ...gameInfo,
        screenshots: filterScreenshot(data.results),
      };
    }

    Promise.all([getInfo(), getScreenshots()]).then(() => {
      setInfo(gameInfo);
    });
  }, []);

  if (!info) {
    return <Loading />;
  }
}
