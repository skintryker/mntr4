import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'

export const metadata = {
  title: 'MNTR4 Originals — Our Designs',
  description: 'Every MNTR4 design is an original. Browse our full catalog of minimal aesthetic apparel made on demand.',
}

const DESIGN_SERIES = [
  { name: 'MNTR4 Classics',    count: 4, desc: 'The core lineup. Logo tees, bracket hoodies, essential neutrals.' },
  { name: 'Minimal Essentials', count: 3, desc: 'Clean silhouettes. No graphics, no noise — just premium basics.' },
  { name: 'Limited Series',     count: 2, desc: 'Time-limited drops. Once gone, no restocks.' },
  { name: 'Statement Pieces',   count: 3, desc: 'Bold minimal graphics for those who prefer a louder silence.' },
]

export default function OriginalsPage() {
  const showcase = products.slice(0, 4)

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.28em] text-white/25 font-semibold mb-4">Original designs</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-none mb-6">
            MNTR4 Originals
          </h1>
          <p className="text-[14px] text-white/40 max-w-lg leading-relaxed font-body">
            Every piece in the MNTR4 catalog is an original design. No templates, no generic graphics — only curated minimal aesthetic apparel made on demand.
          </p>
        </div>
      </section>

      {/* Design series */}
      <section className="py-20 px-6 bg-[#f7f6f3]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-10">Browse by series</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {DESIGN_SERIES.map((s, i) => (
              <Link key={s.name} href="/shop" className="group bg-white border border-black/8 p-6 hover:border-black/20 transition-colors">
                <p className="text-[10px] uppercase tracking-[0.18em] text-black/25 font-semibold mb-4">0{i + 1}</p>
                <h3 className="text-[13px] font-bold text-black tracking-tight mb-2">{s.name}</h3>
                <p className="text-[11px] text-black/40 leading-relaxed mb-4 font-body">{s.desc}</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-black/30 font-semibold">{s.count} designs</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase products */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">Featured pieces</p>
              <h2 className="text-3xl font-bold tracking-tight text-black leading-none">The Catalog</h2>
            </div>
            <Link href="/shop" className="text-[11px] uppercase tracking-[0.14em] text-black/40 hover:text-black transition-colors font-medium">
              Shop All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2">
            {showcase.map((p) => <ProductCard key={p.id} {...p} />)}
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="py-20 px-6 bg-[#1a1a1a]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.22em] text-white/25 font-semibold mb-6">The MNTR4 way</p>
          <p className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight mb-8">
            Minimal aesthetic apparel, made on demand. Original designs, premium essentials, zero overproduction.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/shop" className="bg-white text-black text-[11px] uppercase tracking-[0.18em] font-bold px-8 py-4 hover:bg-[#f7f6f3] transition-colors">
              Shop Now
            </Link>
            <Link href="/drops" className="border border-white/25 text-white text-[11px] uppercase tracking-[0.18em] font-bold px-8 py-4 hover:border-white transition-colors">
              View Drops
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
