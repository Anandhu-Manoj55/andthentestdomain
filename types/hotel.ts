export interface ExploreDestination {
  name: string;
  description: string;
}

export interface Airport {
  name: string;
  location?: string;
  code: string;
  distance: string;
}

export interface HowToReach {
  airports: Airport[];
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  category: string;

  image: string;
  alt: string;

  accentClass: string;

  intro?: string;
  why?: string;

  highlights?: string[];

  exploreDestination?: ExploreDestination[];

  howToReach?: HowToReach;

  idealFor?: string[];

  website?: string;
  map?: string;
  mapEmbedUrl?: string;

  tags?: string[];

  isFeatured?: boolean;
  isRecommended?: boolean;

  categoryTag?: string;

  rating?: number;
  stayStyle?: string;
  bestTimeToVisit?: string;
  checkIn?: string;
  checkOut?: string;
}