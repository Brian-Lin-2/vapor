export type GamePreview = {
  id: number;
  name: string;
  background_image: string;
  slug: string;
  parent_platforms: Platform[];
  price: string;
};

export type Platform = {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
};
