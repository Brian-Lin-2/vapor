export type GamePreview = {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  parent_platforms: Platform[];
  price: string;
};

export type GameInfo = {
  id: number;
  name: string;
  released: string;
  tags: Tag[];
  platforms: Platform[];
  description_raw: string;
  developers: Company[];
  publishers: Company[];
  genres: Genre[];
  rating: number;
  rating_top: number;
  rating_count: number;
  ratings: Rating[];
  esrb_rating: ESRB[];
  updated: string;
  website: string;
  screenshots: Screenshot[];
  price: string;
};

export type Platform = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};

export type Tag = {
  id: number;
  image: string;
  name: string;
  slug: string;
};

export type Screenshot = {
  id: number;
  image: string;
};

export type Company = {
  id: number;
  name: string;
  slug: string;
};

export type ESRB = {
  id: number;
  name: string;
  slug: string;
};

export type Genre = {
  count: number;
  id: number;
  image_background: string;
  name: string;
  slug: string;
};

export type Rating = {
  count: number;
  id: number;
  percent: number;
  title: string;
};
