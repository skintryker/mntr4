import Link from 'next/link'

interface CollectionCardProps {
  name: string
  description: string
  href: string
  itemCount: number
  bgColor?: string
}

export default function CollectionCard({ name, description, href, itemCount, bgColor }: CollectionCardProps) {
  const isDark = bgColor && ['#0a0a0a', '#1a1a1a', '#000000', '#888888'].includes(bgColor)

  return (
    <Link href={href} className="group block">
      {/* Image area */}
      <div
        className="relative h-72 overflow-hidden"
        style={{ backgroundColor: bgColor ?? '#e8e4dc' }}
      >
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:14px_14px]" />

        {/* Center watermark */}
        <div className={`absolute inset-0 flex items-center justify-center select-none pointer-events-none`}>
          <span className={`font-bold tracking-[0.22em] text-[11px] uppercase opacity-15 ${isDark ? 'text-white' : 'text-black'}`}>
            [ MNTR4 ]
          </span>
        </div>

        {/* Zoom on hover */}
        <div className={`absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03] ${isDark ? 'bg-white/0 group-hover:bg-white/3' : 'bg-black/0 group-hover:bg-black/3'}`} />

        {/* Item count */}
        <div className="absolute top-4 right-4">
          <span className={`text-[10px] uppercase tracking-[0.12em] px-2 py-0.5 font-semibold ${isDark ? 'bg-white/15 text-white' : 'bg-black/8 text-black'}`}>
            {itemCount} items
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="pt-4 pb-2">
        <h3 className="text-[13px] font-bold uppercase tracking-[0.1em] text-black mb-1">{name}</h3>
        <p className="text-[12px] text-black/50 leading-relaxed mb-3 font-body">{description}</p>
        <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-black border-b border-black/20 pb-0.5 group-hover:border-black transition-colors">
          Shop Collection →
        </span>
      </div>
    </Link>
  )
}
