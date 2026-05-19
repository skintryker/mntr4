export interface Creator {
  id: number
  name: string
  handle: string
  bio: string
  itemCount: number
  avatarColor: string
}

export const creators: Creator[] = [
  {
    id: 1,
    name: 'Jordan Nakamura',
    handle: '@jnakamura',
    bio: 'Graphic designer and art director based in Tokyo. Known for geometric minimal prints and monochromatic editorial aesthetics.',
    itemCount: 14,
    avatarColor: '#1a1a1a',
  },
  {
    id: 2,
    name: 'Aaliyah Monroe',
    handle: '@aaliyahmonroe',
    bio: 'Independent illustrator from London. Creates bold yet restrained line art that translates perfectly to garment printing.',
    itemCount: 9,
    avatarColor: '#888888',
  },
  {
    id: 3,
    name: 'Marcus Chen',
    handle: '@mrchn',
    bio: 'Streetwear designer and creative director. Focuses on deconstructed typography and brand identity applied to wearables.',
    itemCount: 11,
    avatarColor: '#d4d0c8',
  },
  {
    id: 4,
    name: 'Sofia Reyes',
    handle: '@sofiareyes_',
    bio: 'Architect turned textile designer. Applies structural principles to pattern design, creating pieces that feel architectural and precise.',
    itemCount: 7,
    avatarColor: '#e8e4dc',
  },
]
