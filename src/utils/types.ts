export type Game = {
  id: number;
  name: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  released: string;
  short_screenshots: Screenshots[];
  slug: string;
  parent_platforms: Platform[];
  tags: string[];
};

export type Platform = {
  id: number;
  name: string;
  slug: string;
};

export type Screenshots = {
  id: number;
  image: string;
};
