import CollectionCard from '@/components/CollectionCard'
import { collections } from '@/data/collections'

export const metadata = {
  title: 'Collections — MNTR4',
  description: 'Browse all MNTR4 collections — curated minimal streetwear organized by aesthetic and purpose.',
}

export default function CollectionsPage() {
  return (
    <div className="pt-16 min-h-screen bg-brand-off-white">
      {/* Page Header */}
      <div className="bg-brand-near-black py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-3">
            Curated & organized
          </p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-4">
            Collections
          </h1>
          <p className="text-sm text-brand-mid-gray max-w-lg leading-relaxed">
            Every drop and product at MNTR4 belongs to a collection. Explore by aesthetic, purpose, or creator.
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium">
            {collections.length} Collections
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <CollectionCard
              key={col.id}
              name={col.name}
              description={col.description}
              href={`/collections`}
              itemCount={col.itemCount}
              bgColor={col.bgColor}
            />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-beige py-16 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-3">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <h2 className="text-2xl font-black tracking-tighter text-brand-black mb-4">
            Browse All Products
          </h2>
          <p className="text-sm text-brand-mid-gray leading-relaxed mb-8">
            See every item in the MNTR4 catalog, filter by category, color, or price.
          </p>
          <a
            href="/shop"
            className="inline-block bg-brand-black text-white text-xs uppercase tracking-widest font-bold px-8 py-3.5 hover:bg-brand-charcoal transition-colors"
          >
            Go to Shop
          </a>
        </div>
      </div>
    </div>
  )
}
