export interface Product {
  id: number
  slug: string
  name: string
  price: number
  category: string
  tag: string | null
  colors: string[]
  description: string
  material: string
  fit: string
  shipping: string
}

export const products: Product[] = [
  {
    id: 1,
    slug: 'mntr4-logo-tee',
    name: 'MNTR4 Logo Tee',
    price: 32,
    category: 'T-Shirts',
    tag: 'Best Seller',
    colors: ['#000000', '#f5f5f0', '#888888'],
    description:
      'The MNTR4 Logo Tee is the foundation of any minimal wardrobe. Crafted from heavyweight premium cotton, this tee features our signature bracket logo printed in a clean, understated style. Designed for layering or wearing alone.',
    material: '100% heavyweight combed ring-spun cotton, 220 GSM',
    fit: 'Relaxed fit. Model is 6\'1" wearing size M. We recommend sizing up for an oversized look.',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping on orders over $75. Returns accepted within 30 days of delivery.',
  },
  {
    id: 2,
    slug: 'minimal-bracket-hoodie',
    name: 'Minimal Bracket Hoodie',
    price: 68,
    category: 'Hoodies',
    tag: 'New',
    colors: ['#000000', '#1a1a1a', '#d4d0c8'],
    description:
      'A heavyweight pullover hoodie built around clean silhouettes and minimal branding. The Minimal Bracket Hoodie features a kangaroo pocket, ribbed cuffs, and our [ MNTR4 ] wordmark embroidered on the chest.',
    material: '80% cotton, 20% polyester fleece, 380 GSM',
    fit: 'Oversized fit. Model is 6\'1" wearing size M. True to size for a relaxed drape.',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping on orders over $75. Returns accepted within 30 days of delivery.',
  },
  {
    id: 3,
    slug: 'premium-neutral-sweatshirt',
    name: 'Premium Neutral Sweatshirt',
    price: 58,
    category: 'Sweatshirts',
    tag: null,
    colors: ['#e8e4dc', '#888888', '#000000'],
    description:
      'Elevated basics done right. The Premium Neutral Sweatshirt is a crewneck built for longevity — soft on the inside, structured on the outside. Available in our signature neutral palette.',
    material: '75% cotton, 25% polyester, 350 GSM brushed fleece lining',
    fit: 'Regular fit with slightly dropped shoulders. Model is 6\'1" wearing size M.',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping on orders over $75. Returns accepted within 30 days of delivery.',
  },
  {
    id: 4,
    slug: 'black-logo-cap',
    name: 'Black Logo Cap',
    price: 34,
    category: 'Hats',
    tag: null,
    colors: ['#000000', '#1a1a1a'],
    description:
      'A 6-panel structured cap with a low-profile silhouette. Features the MNTR4 bracket logo embroidered on the front panel and an adjustable strapback closure.',
    material: '100% chino cotton twill, structured front panels',
    fit: 'One size fits most. Adjustable strapback closure.',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping on orders over $75. Returns accepted within 30 days of delivery.',
  },
  {
    id: 5,
    slug: 'off-white-tote-bag',
    name: 'Off White Tote Bag',
    price: 28,
    category: 'Tote Bags',
    tag: null,
    colors: ['#f5f5f0', '#e8e4dc'],
    description:
      'A heavy-duty canvas tote for everyday carry. Printed with the MNTR4 bracket logo, this bag is built to handle the weight of daily life while keeping things clean and minimal.',
    material: '100% natural canvas, 12oz weight, reinforced stitching at handles',
    fit: 'One size. Interior dimensions: 15"W × 16"H × 4"D. Handle drop: 11".',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping on orders over $75. Returns accepted within 30 days of delivery.',
  },
  {
    id: 6,
    slug: 'grey-essential-sweatpants',
    name: 'Grey Essential Sweatpants',
    price: 62,
    category: 'Sweatpants',
    tag: null,
    colors: ['#888888', '#1a1a1a', '#000000'],
    description:
      'The Grey Essential Sweatpants are designed for comfort without compromising on style. Tapered fit, elastic waistband with drawstring, side and back pockets.',
    material: '60% cotton, 40% polyester, 300 GSM mid-weight fleece',
    fit: 'Tapered fit. Model is 6\'1" wearing size M with a 30" inseam. Available in regular and long inseam.',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping on orders over $75. Returns accepted within 30 days of delivery.',
  },
  {
    id: 7,
    slug: 'limited-drop-tee',
    name: 'Limited Drop Tee',
    price: 36,
    category: 'T-Shirts',
    tag: 'Limited',
    colors: ['#000000', '#1a1a1a'],
    description:
      'Part of our first limited drop series, this tee features an exclusive graphic only available for a limited time. Once it\'s gone, it\'s gone. No restocks.',
    material: '100% ringspun cotton, garment washed, 200 GSM',
    fit: 'Slightly oversized fit. Model is 6\'1" wearing size M. Wash cold, hang dry.',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping on orders over $75. Returns accepted within 30 days of delivery.',
  },
  {
    id: 8,
    slug: 'creator-graphic-tee',
    name: 'Creator Graphic Tee',
    price: 30,
    category: 'T-Shirts',
    tag: 'New',
    colors: ['#f5f5f0', '#000000'],
    description:
      'A collab tee from our Creator program — featuring original artwork from an independent designer in the MNTR4 network. Each Creator Graphic Tee supports the artist directly.',
    material: '100% combed cotton, 180 GSM, water-based inks',
    fit: 'Regular fit. Model is 6\'1" wearing size M.',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping on orders over $75. Returns accepted within 30 days of delivery.',
  },
  {
    id: 9,
    slug: 'classic-black-hoodie',
    name: 'Classic Black Hoodie',
    price: 72,
    category: 'Hoodies',
    tag: 'Best Seller',
    colors: ['#000000', '#1a1a1a'],
    description:
      'Our best-selling hoodie — black, heavyweight, and built to last. No unnecessary details. Just a perfect hoodie in a perfect weight. The Classic Black Hoodie is our most re-ordered product.',
    material: '80% cotton, 20% polyester, 400 GSM premium fleece',
    fit: 'Regular fit with a slightly boxy silhouette. Model is 6\'1" wearing size M.',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping on orders over $75. Returns accepted within 30 days of delivery.',
  },
  {
    id: 10,
    slug: 'minimal-streetwear-set',
    name: 'Minimal Streetwear Set',
    price: 118,
    category: 'Sets',
    tag: 'Limited',
    colors: ['#000000', '#888888'],
    description:
      'The complete MNTR4 set — matching sweatshirt and sweatpants in our tonal colorways. Designed to be worn together or separately. Sold as a bundled set at a reduced price.',
    material: 'Sweatshirt: 75% cotton, 25% poly. Sweatpants: 60% cotton, 40% poly. Both 350 GSM.',
    fit: 'Both pieces in a relaxed, slightly oversized fit. Order your normal size for an intended look.',
    shipping:
      'Made on demand. Ships within 5–7 business days. Free shipping included. Returns accepted within 30 days of delivery.',
  },
]
