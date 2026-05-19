import Link from 'next/link'

interface CategoryCardProps {
  name: string
  href: string
  bgColor?: string
  count?: number
}

export default function CategoryCard({ name, href, bgColor, count }: CategoryCardProps) {
  const isDark = bgColor && ['#1a1a1a', '#0a0a0a', '#000000', '#888888'].includes(bgColor)
  const textColor = isDark ? 'text-white' : 'text-black'
  const subColor = isDark ? 'text-white/40' : 'text-black/40'

  return (
    <Link href={href} className="group block shrink-0 w-36 md:w-44">
      <div
        className="relative w-full aspect-square overflow-hidden transition-transform duration-500 group-hover:scale-[0.97]"
        style={bgColor ? { backgroundColor: bgColor } : { backgroundColor: '#e8e4dc' }}
      >
        {/* Subtle inner border */}
        <div className="absolute inset-[6px] border border-white/10 pointer-events-none" />

        {/* Arrow */}
        <div className={`absolute top-3 right-3 text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isDark ? 'text-white/40' : 'text-black/30'}`}>
          ↗
        </div>

        {/* Name */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className={`text-[11px] uppercase tracking-[0.16em] font-semibold leading-tight ${textColor}`}>
            {name}
          </p>
          {count && (
            <p className={`text-[10px] mt-0.5 ${subColor}`}>{count} styles</p>
          )}
        </div>
      </div>
    </Link>
  )
}
