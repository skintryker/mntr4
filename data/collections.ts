export interface Collection {
  id: number
  slug: string
  name: string
  description: string
  itemCount: number
  bgColor: string
}

export const collections: Collection[] = [
  {
    id: 1,
    slug: 'minimal-essentials',
    name: 'Minimal Essentials',
    description: 'The foundation of any wardrobe — clean cuts, neutral tones, and nothing extra.',
    itemCount: 12,
    bgColor: '#e8e4dc',
  },
  {
    id: 2,
    slug: 'streetwear-basics',
    name: 'Streetwear Basics',
    description: 'Classic streetwear silhouettes refined for the modern minimal aesthetic.',
    itemCount: 8,
    bgColor: '#d4d0c8',
  },
  {
    id: 3,
    slug: 'black-and-white',
    name: 'Black & White',
    description: 'The most versatile palette. Bold contrast, timeless appeal.',
    itemCount: 15,
    bgColor: '#1a1a1a',
  },
  {
    id: 4,
    slug: 'premium-neutrals',
    name: 'Premium Neutrals',
    description: 'Elevated pieces in warm grays, beiges, and off-whites. Tone on tone.',
    itemCount: 10,
    bgColor: '#f5f5f0',
  },
  {
    id: 5,
    slug: 'logo-collection',
    name: 'Logo Collection',
    description: 'Everything featuring the [ MNTR4 ] bracket mark — our signature identity.',
    itemCount: 9,
    bgColor: '#888888',
  },
  {
    id: 6,
    slug: 'limited-drops',
    name: 'Limited Drops',
    description: 'Time-limited campaigns from creators and exclusive MNTR4 releases.',
    itemCount: 4,
    bgColor: '#0a0a0a',
  },
  {
    id: 7,
    slug: 'creator-picks',
    name: 'Creator Picks',
    description: 'Curated pieces selected and designed by creators in the MNTR4 network.',
    itemCount: 7,
    bgColor: '#d4d0c8',
  },
]
