import Link from 'next/link'

interface ProductCardProps {
  id: number
  slug: string
  name: string
  price: number
  category: string
  colors: string[]
  tag?: string | null
}

const tagConfig: Record<string, { label: string; className: string }> = {
  'New':         { label: 'New',         className: 'bg-black text-white' },
  'Best Seller': { label: 'Best Seller', className: 'bg-brand-charcoal text-white' },
  'Limited':     { label: 'Limited',     className: 'bg-brand-stone text-white' },
}

// Deterministic bg per slug so cards look varied
const placeholderBgs = [
  'bg-[#ece9e3]',
  'bg-[#e2ddd6]',
  'bg-[#d8d4cc]',
  'bg-[#f0ede8]',
  'bg-[#dedad2]',
  'bg-[#e6e2da]',
]

function getBg(slug: string) {
  let hash = 0
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0
  return placeholderBgs[hash % placeholderBgs.length]
}

export default function ProductCard({ slug, name, price, category, colors, tag }: ProductCardProps) {
  const tagMeta = tag ? tagConfig[tag] : null
  const bg = getBg(slug)

  return (
    <Link href={`/product/${slug}`} className="group block">
      <div className="overflow-hidden">
        {/* Image area */}
        <div className={`relative aspect-[4/5] ${bg} overflow-hidden`}>
          {/* Mockup center stamp */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 opacity-20 select-none pointer-events-none">
            <span className="font-bold tracking-[0.2em] text-[11px] text-black uppercase">[ MNTR4 ]</span>
            <span className="text-[9px] uppercase tracking-widest text-black/60">{category}</span>
          </div>

          {/* Tag badge */}
          {tagMeta && (
            <div className={`absolute top-3 left-3 text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 font-semibold ${tagMeta.className}`}>
              {tagMeta.label}
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />

          {/* Quick View pill */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span className="bg-white text-black text-[10px] uppercase tracking-[0.14em] px-5 py-2 font-semibold shadow-sm">
              Quick View
            </span>
          </div>
        </div>

        {/* Info row */}
        <div className="pt-3 pb-5">
          <div className="flex items-start justify-between gap-2 mb-1">
            <p className="text-[11px] uppercase tracking-[0.1em] text-black/40 font-medium">{category}</p>
            {/* Color swatches */}
            <div className="flex items-center gap-1 mt-0.5">
              {colors.slice(0, 4).map((color, i) => (
                <span
                  key={i}
                  className="w-2.5 h-2.5 rounded-full border border-black/10"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
          <div className="flex items-baseline justify-between">
            <h3 className="text-[13px] font-semibold text-black leading-snug tracking-tight">{name}</h3>
            <p className="text-[13px] font-bold text-black shrink-0 ml-2">${price}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
