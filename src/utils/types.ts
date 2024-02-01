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
  description: string;
  developers: Company[];
  publishers: Company[];
  rating: number;
  rating_top: number;
  ratings: number;
  updated: string;
  website: string;
  screenshots: Screenshot[];
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
