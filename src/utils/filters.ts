import {
  type Platform,
  type Screenshot,
  type GamePreview,
  type GameInfo,
  type Tag,
  type Company,
} from "./types";

export function filterPlatform(platform: Platform[]): Platform[] {
  const filteredPlatform = platform.map((e) => {
    return {
      platform: {
        id: e.platform.id,
        name: e.platform.name,
        slug: e.platform.slug,
      },
    };
  });

  return filteredPlatform;
}

export function filterScreenshot(screenshots: Screenshot[]): Screenshot[] {
  const filteredScreenshot = screenshots.map((e) => {
    return {
      id: e.id,
      image: e.image,
    };
  });

  return filteredScreenshot;
}

export function filterPreview(preview: GamePreview[]): GamePreview[] {
  const filteredPreview = preview.map((game) => {
    return {
      id: game.id,
      name: game.name,
      background_image: game.background_image,
      slug: game.slug,
      parent_platforms: game.parent_platforms,
      // Hard coded for now.
      price: 49.99,
    };
  });

  return filteredPreview;
}

export function filterInfo(game: GameInfo): GameInfo {
  const filteredInfo = {
    id: game.id,
    name: game.name,
    released: game.released,
    tags: filterTag(game.tags),
    description_raw: game.description_raw,
    platforms: filterPlatform(game.platforms),
    developers: filterCompany(game.developers),
    publishers: filterCompany(game.publishers),
    genres: game.genres,
    rating: game.rating,
    rating_count: game.ratings.reduce((acc, e) => acc + e.count, 0),
    rating_top: game.rating_top,
    esrb_rating: game.esrb_rating,
    ratings: game.ratings,
    updated: game.updated,
    website: game.website,
    screenshots: [],
    // Hard coded for now
    price: 49.99,
  };

  return filteredInfo;
}

export function filterTag(tag: Tag[]): Tag[] {
  const filteredTag = tag.map((e) => {
    return {
      id: e.id,
      image: e.image,
      name: e.name,
      slug: e.slug,
    };
  });

  return filteredTag;
}

export function filterCompany(company: Company[]): Company[] {
  const filteredCompany = company.map((e) => {
    return {
      id: e.id,
      name: e.name,
      slug: e.slug,
    };
  });

  return filteredCompany;
}
