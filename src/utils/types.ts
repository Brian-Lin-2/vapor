export type Game = {
  id: number;
  name: string;
  rating: number;
  rating_top: number;
  ratings_count: number;
  released: string;
  background_image: string;
  short_screenshots: Screenshots[];
  slug: string;
  parent_platforms: Platform[];
  tags: string[];
  price: string;
};

export type Platform = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

export type Screenshots = {
  id: number;
  image: string;
};
