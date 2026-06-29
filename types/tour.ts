export interface Tour {
  id: string;
  name: string;
  destination: string;
  nights: string;
  price: string;
  slug: string;
  route?: string;
  description?: string;
  typeBadge?: string;
  isFeatured?: boolean;
  accentClass?: string;
  season?: string;
  image?: string;
  region?: string;
  highlights?: string[];
}
