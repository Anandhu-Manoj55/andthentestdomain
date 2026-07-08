export interface Hotel {
  id: string;
  name: string;
  location: string;
  category: string;
  image: string;
  alt: string;
  accentClass: string;
  why?: string;
  tags?: string[];
  isFeatured?: boolean;
  isRecommended?: boolean;
  categoryTag?: string;
  mapEmbedUrl?: string;
}

