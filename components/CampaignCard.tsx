import Link from 'next/link'

interface CampaignCardProps {
  title: string
  description: string
  goal: number
  claimed: number
  endDate: string
  status: 'active' | 'ended'
  slug: string
}

export default function CampaignCard({
  title,
  description,
  goal,
  claimed,
  endDate,
  status,
  slug,
}: CampaignCardProps) {
  const percentage = Math.round((claimed / goal) * 100)

  return (
    <div className="bg-white border border-brand-light-gray overflow-hidden group">
      {/* Image area */}
      <div className="relative h-48 bg-gradient-to-br from-brand-charcoal to-brand-near-black">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

        {/* Status badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs uppercase tracking-widest px-2 py-1 font-medium ${
              status === 'active'
                ? 'bg-white text-brand-black'
                : 'bg-brand-mid-gray/40 text-white border border-white/10'
            }`}
          >
            {status === 'active' ? 'Active Drop' : 'Ended'}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-sm font-bold uppercase tracking-widest text-brand-black mb-2">
          {title}
        </h3>
        <p className="text-xs text-brand-mid-gray leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Progress */}
        <div className="mb-3">
          <div className="flex justify-between mb-1">
            <span className="text-xs text-brand-mid-gray tracking-wide">
              {claimed} of {goal} claimed
            </span>
            <span className="text-xs font-semibold text-brand-black">{percentage}%</span>
          </div>
          <div className="w-full bg-brand-light-gray h-1">
            <div
              className="bg-brand-black h-1 transition-all"
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        </div>

        <p className="text-xs text-brand-mid-gray mb-4 tracking-wide">
          {status === 'active' ? `Ends ${endDate}` : `Ended ${endDate}`}
        </p>

        {status === 'active' ? (
          <Link
            href={`/drops`}
            className="block w-full text-center bg-brand-black text-white text-xs uppercase tracking-widest font-medium py-2.5 hover:bg-brand-charcoal transition-colors"
          >
            Support This Drop
          </Link>
        ) : (
          <div className="block w-full text-center border border-brand-light-gray text-brand-mid-gray text-xs uppercase tracking-widest font-medium py-2.5">
            Campaign Ended
          </div>
        )}
      </div>
    </div>
  )
}
