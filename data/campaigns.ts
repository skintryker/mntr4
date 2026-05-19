export interface Campaign {
  id: number
  slug: string
  title: string
  description: string
  goal: number
  claimed: number
  endDate: string
  status: 'active' | 'ended'
  creator: string
  price: number
}

export const campaigns: Campaign[] = [
  {
    id: 1,
    slug: 'mntr4-drop-001',
    title: 'MNTR4 × DROP 001',
    description:
      'Our first official limited drop. A premium heavyweight tee featuring an exclusive bracket graphic, available only during this campaign window. Once the campaign ends, this design is retired permanently. 224 supporters and counting.',
    goal: 300,
    claimed: 224,
    endDate: '2024-12-31',
    status: 'active',
    creator: 'MNTR4',
    price: 36,
  },
  {
    id: 2,
    slug: 'tokyo-minimal-drop',
    title: 'Tokyo Minimal — Jordan Nakamura',
    description:
      'A limited capsule collection by Tokyo-based designer Jordan Nakamura. Geometric line work inspired by brutalist architecture. This drop ran for 14 days and sold out.',
    goal: 150,
    claimed: 150,
    endDate: '2024-10-15',
    status: 'ended',
    creator: 'Jordan Nakamura',
    price: 42,
  },
  {
    id: 3,
    slug: 'monochrome-series-01',
    title: 'Monochrome Series 01 — Marcus Chen',
    description:
      'Marcus Chen\'s debut MNTR4 drop: a deconstructed typographic tee in black and off-white. The series explored negative space in branding, applied to a single premium garment.',
    goal: 200,
    claimed: 187,
    endDate: '2024-09-01',
    status: 'ended',
    creator: 'Marcus Chen',
    price: 38,
  },
]
