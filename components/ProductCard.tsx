import Link from 'next/link'
import ProductMockup, { getMockupBg } from '@/components/ProductMockup'

interface ProductCardProps {
  id: number
  slug: string
  name: string
  price: number
  category: string
  colors: string[]
  tag?: string | null
}

const tagConfig: Record<string, string> = {
  'New':         'bg-black text-white',
  'Best Seller': 'bg-[#1a1a1a] text-white',
  'Limited':     'bg-[#888] text-white',
}

export default function ProductCard({ slug, name, price, category, colors, tag }: ProductCardProps) {
  const primaryColor = colors[0] ?? '#1a1a1a'
  const bg = getMockupBg(primaryColor)
  const tagClass = tag ? tagConfig[tag] : null

  return (
    <Link href={`/product/${slug}`} className="group block">
      {/* Image area */}
      <div
        className="relative aspect-[4/5] overflow-hidden mb-3"
        style={{ backgroundColor: bg }}
      >
        {/* Garment mockup — padded so it floats nicely */}
        <div className="absolute inset-0 flex items-center justify-center px-8 py-10">
          <ProductMockup category={category} color={primaryColor} />
        </div>

        {/* Tag badge */}
        {tagClass && (
          <div className={`absolute top-3 left-3 text-[9px] uppercase tracking-[0.14em] px-2 py-0.5 font-semibold ${tagClass}`}>
            {tag}
          </div>
        )}

        {/* Hover overlay + Quick View */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/6 transition-colors duration-300" />
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pb-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <span className="bg-white text-black text-[10px] uppercase tracking-[0.16em] px-5 py-2 font-semibold shadow-sm">
            Quick View
          </span>
        </div>
      </div>

      {/* Info row */}
      <div className="px-0.5">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[10px] uppercase tracking-[0.12em] text-black/40 font-medium">{category}</p>
          {/* Color swatches */}
          <div className="flex items-center gap-1">
            {colors.slice(0, 4).map((c, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full border border-black/10"
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
        <div className="flex items-baseline justify-between gap-2">
          <h3 className="text-[13px] font-semibold text-black leading-snug tracking-tight">{name}</h3>
          <p className="text-[13px] font-bold text-black shrink-0">${price}</p>
        </div>
      </div>
    </Link>
  )
}
