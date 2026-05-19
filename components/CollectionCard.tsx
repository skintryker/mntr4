import Link from 'next/link'
import ProductMockup from '@/components/ProductMockup'

interface CollectionCardProps {
  name: string
  description: string
  href: string
  itemCount: number
  bgColor?: string
}

// Each collection gets a pair of garment types/colors to preview
const COLLECTION_PREVIEWS: Record<string, { category: string; color: string }[]> = {
  default: [
    { category: 'T-Shirts', color: '#f0ede8' },
    { category: 'Hoodies',  color: '#1a1a1a' },
  ],
  dark: [
    { category: 'Hoodies',  color: '#0a0a0a'  },
    { category: 'T-Shirts', color: '#e8e4dc' },
  ],
  neutral: [
    { category: 'Sweatshirts', color: '#e0dbd2' },
    { category: 'Hats',        color: '#888888'  },
  ],
}

function getPreview(bgColor?: string) {
  if (!bgColor) return COLLECTION_PREVIEWS.default
  if (['#0a0a0a', '#1a1a1a', '#000000'].includes(bgColor)) return COLLECTION_PREVIEWS.dark
  if (['#888888'].includes(bgColor)) return COLLECTION_PREVIEWS.neutral
  return COLLECTION_PREVIEWS.default
}

export default function CollectionCard({ name, description, href, itemCount, bgColor }: CollectionCardProps) {
  const isDark = bgColor && ['#0a0a0a', '#1a1a1a', '#000000', '#888888'].includes(bgColor)
  const previews = getPreview(bgColor)

  return (
    <Link href={href} className="group block">
      {/* Image area — shows mini product mockups */}
      <div
        className="relative h-64 overflow-hidden"
        style={{ backgroundColor: bgColor ?? '#e8e4dc' }}
      >
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:14px_14px]" />

        {/* Two product mockups side by side */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 px-6 py-6">
          <div className="w-2/5 opacity-90 group-hover:scale-105 transition-transform duration-500 -rotate-3 group-hover:-rotate-1">
            <ProductMockup category={previews[0].category} color={previews[0].color} />
          </div>
          <div className="w-2/5 opacity-90 group-hover:scale-105 transition-transform duration-500 rotate-3 group-hover:rotate-1 mt-4">
            <ProductMockup category={previews[1].category} color={previews[1].color} />
          </div>
        </div>

        {/* Hover darken */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-300" />

        {/* Item count badge */}
        <div className="absolute top-4 right-4">
          <span className={`text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 font-semibold ${isDark ? 'bg-white/15 text-white' : 'bg-black/8 text-black'}`}>
            {itemCount} items
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-black mb-1">{name}</h3>
        <p className="text-[12px] text-black/45 leading-relaxed mb-3 font-body">{description}</p>
        <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-black border-b border-black/20 pb-0.5 group-hover:border-black transition-colors">
          Shop Collection →
        </span>
      </div>
    </Link>
  )
}
