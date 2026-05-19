import Link from 'next/link'

interface CreatorCardProps {
  name: string
  handle: string
  itemCount: number
  bio: string
  avatarColor: string
}

export default function CreatorCard({ name, handle, itemCount, bio, avatarColor }: CreatorCardProps) {
  const initials = name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2)
  const isDark = ['#0a0a0a', '#1a1a1a', '#000000', '#888888'].includes(avatarColor)

  return (
    <div className="group border border-black/8 bg-white p-6 hover:border-black/20 transition-colors duration-300">
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div
          className="w-11 h-11 flex items-center justify-center shrink-0"
          style={{ backgroundColor: avatarColor }}
        >
          <span className={`text-[11px] font-bold tracking-widest ${isDark ? 'text-white' : 'text-black'}`}>
            {initials}
          </span>
        </div>
        <div>
          <h3 className="text-[13px] font-bold text-black uppercase tracking-[0.08em] leading-tight">{name}</h3>
          <p className="text-[11px] text-black/40 tracking-wide mt-0.5">{handle}</p>
        </div>
      </div>

      <p className="text-[11px] uppercase tracking-[0.1em] text-black/40 font-medium mb-3">{itemCount} designs</p>
      <p className="text-[12px] text-black/55 leading-relaxed mb-5 font-body">{bio}</p>

      <Link href="/creators" className="text-[11px] uppercase tracking-[0.14em] font-semibold text-black border-b border-black/20 pb-0.5 group-hover:border-black transition-colors">
        View Store →
      </Link>
    </div>
  )
}
