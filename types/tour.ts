export interface Destination {
  name: string;
  region?: string;
  description?: string;
  image: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  name?: string;
  destination: string;
  region?: string;
  type: string;
  typeBadge?: string;
  summary: string;
  description?: string;
  price: string;
  departure: string;
  season?: string;
  duration: {
    nights: number;
    days: number;
  };
  nights?: string;
  route: string[];
  images: {
    card: string;
    hero: string;
  };
  destinations: Destination[];
  image?: string;
  highlights: string[];
  isFeatured?: boolean;
  accentClass?: string;
}
