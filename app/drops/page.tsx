import CampaignCard from '@/components/CampaignCard'
import { campaigns } from '@/data/campaigns'
import Link from 'next/link'

export const metadata = {
  title: 'Limited Drops — MNTR4',
  description: 'Time-limited campaigns from creators and exclusive MNTR4 releases. Support a drop before it closes.',
}

export default function DropsPage() {
  const activeCampaign = campaigns.find((c) => c.status === 'active')
  const pastDrops = campaigns.filter((c) => c.status === 'ended')
  const activePercentage = activeCampaign
    ? Math.round((activeCampaign.claimed / activeCampaign.goal) * 100)
    : 0

  return (
    <div className="pt-16 min-h-screen bg-brand-off-white">
      {/* Page header */}
      <div className="bg-brand-near-black py-16 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-2">
            Timed campaigns
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
            Limited Drops
          </h1>
        </div>
      </div>

      {/* Active Drop Hero */}
      {activeCampaign && (
        <section className="bg-brand-charcoal px-6 py-20">
          <div className="max-w-4xl mx-auto">
            {/* Active badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest bg-white/10 text-white px-3 py-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Active Drop
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image area */}
              <div className="relative aspect-square bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-xs uppercase tracking-widest text-white/20 font-medium">
                    Product Preview
                  </p>
                </div>
              </div>

              {/* Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
                  {activeCampaign.title}
                </h2>
                <p className="text-sm text-brand-mid-gray leading-relaxed mb-8">
                  {activeCampaign.description}
                </p>

                {/* Price */}
                <p className="text-2xl font-bold text-white mb-6">${activeCampaign.price}</p>

                {/* Countdown */}
                <div className="flex items-center gap-4 mb-8">
                  {[
                    { value: '2', label: 'Days' },
                    { value: '14', label: 'Hours' },
                    { value: '32', label: 'Min' },
                  ].map((unit) => (
                    <div key={unit.label} className="text-center">
                      <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center mb-1.5">
                        <span className="text-2xl font-black text-white">{unit.value}</span>
                      </div>
                      <p className="text-xs uppercase tracking-widest text-brand-mid-gray">
                        {unit.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Progress */}
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs text-brand-mid-gray tracking-wide">
                      {activeCampaign.claimed} of {activeCampaign.goal} claimed
                    </span>
                    <span className="text-xs font-bold text-white">{activePercentage}%</span>
                  </div>
                  <div className="w-full bg-white/10 h-1.5">
                    <div
                      className="bg-white h-1.5 transition-all"
                      style={{ width: `${activePercentage}%` }}
                    />
                  </div>
                </div>

                {/* Share + CTA */}
                <div className="flex flex-col gap-3">
                  <button className="w-full bg-white text-brand-black text-xs uppercase tracking-widest font-bold py-4 hover:bg-brand-off-white transition-colors">
                    Support This Drop
                  </button>
                  <div className="flex items-center gap-3">
                    <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium">
                      Share:
                    </p>
                    <button className="text-xs text-brand-mid-gray hover:text-white transition-colors tracking-wide">
                      Twitter
                    </button>
                    <button className="text-xs text-brand-mid-gray hover:text-white transition-colors tracking-wide">
                      Instagram
                    </button>
                    <button className="text-xs text-brand-mid-gray hover:text-white transition-colors tracking-wide">
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Past Drops */}
      <section className="py-20 px-6 bg-brand-off-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-1">
              Campaign archive
            </p>
            <h2 className="text-2xl font-black tracking-tighter text-brand-black">Past Drops</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastDrops.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                title={campaign.title}
                description={campaign.description}
                goal={campaign.goal}
                claimed={campaign.claimed}
                endDate={campaign.endDate}
                status={campaign.status}
                slug={campaign.slug}
              />
            ))}

            {/* Placeholder */}
            <div className="bg-white border border-brand-light-gray p-6 flex flex-col items-center justify-center text-center min-h-64">
              <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-2">
                More coming soon
              </p>
              <p className="text-xs text-brand-mid-gray leading-relaxed mb-6">
                Are you a creator? Submit a limited drop proposal.
              </p>
              <Link
                href="/creators"
                className="text-xs uppercase tracking-widest font-medium text-brand-black border border-brand-black px-4 py-2.5 hover:bg-brand-black hover:text-white transition-colors"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
