export interface Destination {
  id: string;
  name: string;
  slug: string;
  number: string;
  tags: string[];
  titleTag?: string;
  metaDescription?: string;
  heroImage?: string;
  heroTagline?: string;
  heroVideo?: string;
  overviewTitle?: string;
  overviewIntro?: string;
  overviewQuote?: string;
  overviewCite?: string;
  stats?: { label: string; value: string }[];
  facts?: { label: string; value: string }[];
  regions?: { title: string; description: string; tags: string[]; image?: string; accentClass?: string }[];
  popularPlaces?: { name: string; region: string; description: string; isFeatured?: boolean; imageClass?: string; image?: string }[];
  recommendedHotels?: string[]; // references hotel IDs
  bestTime?: {
    description: string;
    months: { month: string; type: 'peak' | 'good' | 'low' }[];
    seasons: { name: string; months: string; description: string }[];
  };
  tours?: string[]; // references tour IDs
}

