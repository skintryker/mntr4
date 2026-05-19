import Link from 'next/link'
import CollectionCard from '@/components/CollectionCard'
import ProductCard from '@/components/ProductCard'
import CreatorCard from '@/components/CreatorCard'
import Newsletter from '@/components/Newsletter'
import CategoryCard from '@/components/CategoryCard'
import { products } from '@/data/products'
import { collections } from '@/data/collections'
import { creators } from '@/data/creators'

const categories = [
  { name: 'T-Shirts',    href: '/shop', bgColor: '#ece9e3', count: 12 },
  { name: 'Hoodies',     href: '/shop', bgColor: '#e2ddd6', count: 8  },
  { name: 'Sweatshirts', href: '/shop', bgColor: '#d8d4cc', count: 6  },
  { name: 'Hats',        href: '/shop', bgColor: '#888888', count: 5  },
  { name: 'Tote Bags',   href: '/shop', bgColor: '#1a1a1a', count: 4  },
  { name: 'Sweatpants',  href: '/shop', bgColor: '#0a0a0a', count: 3  },
]

export default function HomePage() {
  const newDrops    = products.filter((p) => p.tag === 'New' || p.tag === 'Limited').slice(0, 4)
  const bestSellers = products.filter((p) => p.tag === 'Best Seller').concat(products.filter((p) => !p.tag)).slice(0, 4)
  const featuredCollections = collections.slice(0, 3)

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="min-h-screen pt-[60px] bg-white flex flex-col lg:flex-row">
        {/* Left: editorial text */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-20 lg:py-0 max-w-none lg:max-w-[52%]">
          <p className="text-[10px] uppercase tracking-[0.28em] text-black/35 font-semibold mb-8">
            Minimal · Streetwear · Premium
          </p>

          <h1 className="font-bold text-black leading-[0.92] tracking-tight mb-6"
              style={{ fontSize: 'clamp(3.2rem, 7vw, 6.5rem)' }}>
            Minimalist<br />Streetwear
          </h1>

          <p className="text-[14px] text-black/50 max-w-xs leading-relaxed mb-10 font-body">
            Premium essentials for the modern lifestyle. Made on demand, shipped to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center bg-black text-white text-[11px] uppercase tracking-[0.18em] font-semibold px-8 py-3.5 hover:bg-brand-charcoal transition-colors">
              Shop Now
            </Link>
            <Link href="/collections" className="inline-flex items-center justify-center border border-black/20 text-black text-[11px] uppercase tracking-[0.18em] font-semibold px-8 py-3.5 hover:border-black transition-colors">
              Explore Collections
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-10 mt-16 pt-10 border-t border-black/8">
            {[
              { n: '10+',  label: 'Products' },
              { n: '7',    label: 'Collections' },
              { n: '100%', label: 'On Demand' },
              { n: '0',    label: 'Overstock' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-xl font-bold text-black leading-none tracking-tight">{s.n}</p>
                <p className="text-[10px] uppercase tracking-[0.14em] text-black/35 font-medium mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: lifestyle photo grid */}
        <div className="flex-1 grid grid-cols-2 min-h-[55vw] lg:min-h-0">
          {/* Top-left: dark hoodie */}
          <div className="relative bg-[#1a1a1a] flex items-end p-5">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none">
              <span className="text-white text-[11px] uppercase tracking-[0.22em] font-bold rotate-[-90deg] whitespace-nowrap">[ MNTR4 ] — Minimal Streetwear</span>
            </div>
            <div className="relative z-10">
              <p className="text-white/30 text-[9px] uppercase tracking-[0.18em] mb-1">Black Edition</p>
              <p className="text-white text-[11px] font-semibold tracking-tight">Classic Black Hoodie</p>
              <p className="text-white/50 text-[10px]">$72</p>
            </div>
          </div>

          {/* Top-right: light hoodie */}
          <div className="relative bg-[#e8e4dc] flex items-end p-5">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] select-none">
              <span className="text-black text-[11px] uppercase tracking-[0.22em] font-bold rotate-[90deg] whitespace-nowrap">[ MNTR4 ] — Premium Basics</span>
            </div>
            <div className="relative z-10">
              <p className="text-black/40 text-[9px] uppercase tracking-[0.18em] mb-1">Neutral Tone</p>
              <p className="text-black text-[11px] font-semibold tracking-tight">Minimal Bracket Hoodie</p>
              <p className="text-black/50 text-[10px]">$68</p>
            </div>
          </div>

          {/* Bottom-left: light tee */}
          <div className="relative bg-[#f0ede8] flex items-end p-5">
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
              <div className="text-center opacity-10">
                <p className="text-black font-bold tracking-[0.2em] text-[14px]">[ MNTR4 ]</p>
              </div>
            </div>
            <div className="relative z-10">
              <p className="text-black/40 text-[9px] uppercase tracking-[0.18em] mb-1">Off White</p>
              <p className="text-black text-[11px] font-semibold tracking-tight">MNTR4 Logo Tee</p>
              <p className="text-black/50 text-[10px]">$32</p>
            </div>
          </div>

          {/* Bottom-right: dark cap */}
          <div className="relative bg-[#0a0a0a] flex items-end p-5">
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] select-none">
              <span className="text-white font-bold text-[13px] tracking-[0.22em]">[ MNTR4 ]</span>
            </div>
            <div className="relative z-10">
              <span className="inline-block bg-white/10 text-white/60 text-[8px] uppercase tracking-[0.18em] px-2 py-0.5 mb-2">Limited</span>
              <p className="text-white text-[11px] font-semibold tracking-tight">Black Logo Cap</p>
              <p className="text-white/50 text-[10px]">$34</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE TICKER ──────────────────────────────────────── */}
      <div className="bg-black py-3 overflow-hidden whitespace-nowrap select-none">
        <div className="inline-flex animate-none">
          {Array(3).fill(null).map((_, i) => (
            <span key={i} className="text-[10px] uppercase tracking-[0.22em] text-white/40 font-medium px-8">
              Minimal Streetwear &nbsp;·&nbsp; Made on Demand &nbsp;·&nbsp; Premium Basics &nbsp;·&nbsp; Zero Overproduction &nbsp;·&nbsp; [ MNTR4 ] &nbsp;·&nbsp; Curated Design &nbsp;·&nbsp; Creator Driven &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── CATEGORY TILES ──────────────────────────────────────── */}
      <section className="py-16 px-6 md:px-10 bg-white border-b border-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-[11px] uppercase tracking-[0.18em] font-semibold text-black">Shop by Category</p>
            <Link href="/shop" className="text-[11px] uppercase tracking-[0.14em] text-black/40 hover:text-black transition-colors font-medium">
              View All →
            </Link>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat) => (
              <CategoryCard key={cat.name} {...cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COLLECTIONS ────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">Curated for you</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-none">
                Featured Collections
              </h2>
            </div>
            <Link href="/collections" className="hidden md:block text-[11px] uppercase tracking-[0.14em] text-black/40 hover:text-black transition-colors font-medium">
              All Collections →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCollections.map((col) => (
              <CollectionCard
                key={col.id}
                name={col.name}
                description={col.description}
                href="/collections"
                itemCount={col.itemCount}
                bgColor={col.bgColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW DROPS ───────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10 bg-brand-off-white border-t border-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">Just landed</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-none">New Drops</h2>
            </div>
            <Link href="/drops" className="hidden md:block text-[11px] uppercase tracking-[0.14em] text-black/40 hover:text-black transition-colors font-medium">
              See All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2">
            {newDrops.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL BANNER ────────────────────────────────────── */}
      <section className="py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[380px]">
          {/* Left: dark text panel */}
          <div className="bg-black flex flex-col justify-center px-12 py-16">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/30 font-semibold mb-4">The MNTR4 Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
              Premium essentials,<br />bold designs,<br />zero overproduction.
            </h2>
            <p className="text-[13px] text-white/40 leading-relaxed mb-8 max-w-xs font-body">
              Every piece made only when ordered. Fashion that doesn&apos;t waste.
            </p>
            <Link href="/about" className="inline-flex items-center text-[11px] uppercase tracking-[0.18em] text-white font-semibold border-b border-white/30 pb-0.5 hover:border-white transition-colors w-fit">
              Our Story →
            </Link>
          </div>
          {/* Right: beige/textured panel */}
          <div className="bg-[#e8e4dc] flex flex-col justify-center items-center px-12 py-16">
            <p className="font-bold tracking-[0.22em] text-[32px] text-black/10 text-center select-none">[ MNTR4 ]</p>
            <div className="w-px h-16 bg-black/10 my-6" />
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 text-center font-semibold">
              Minimal · Streetwear · Premium
            </p>
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS ────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10 bg-white border-t border-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">Community favorites</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-none">Best Sellers</h2>
            </div>
            <Link href="/shop" className="hidden md:block text-[11px] uppercase tracking-[0.14em] text-black/40 hover:text-black transition-colors font-medium">
              Shop All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CREATOR SPOTLIGHT ───────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/25 font-semibold mb-2">Independent designers</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-none">Creator Spotlight</h2>
            </div>
            <Link href="/creators" className="hidden md:block text-[11px] uppercase tracking-[0.14em] text-white/35 hover:text-white transition-colors font-medium">
              Meet All Creators →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {creators.slice(0, 3).map((creator) => (
              <CreatorCard key={creator.id} {...creator} />
            ))}
          </div>
        </div>
      </section>

      {/* ── LIMITED DROP ────────────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[9px] uppercase tracking-[0.24em] bg-white/8 text-white/40 px-3 py-1.5 mb-8 font-semibold">
            Active Drop
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-none">
            MNTR4 × DROP 001
          </h2>
          <p className="text-[13px] text-white/40 leading-relaxed max-w-md mx-auto mb-12 font-body">
            A premium heavyweight tee with exclusive bracket graphic. Available only during this campaign window.
          </p>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[{ v: '02', l: 'Days' }, { v: '14', l: 'Hrs' }, { v: '32', l: 'Min' }].map((u, i) => (
              <div key={u.l} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 border border-white/10 flex items-center justify-center bg-white/3">
                    <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{u.v}</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/30 font-semibold mt-2">{u.l}</p>
                </div>
                {i < 2 && <span className="text-white/20 text-xl font-light mb-4">:</span>}
              </div>
            ))}
          </div>

          {/* Progress */}
          <div className="max-w-sm mx-auto mb-10">
            <div className="flex justify-between mb-2">
              <span className="text-[10px] text-white/35 tracking-wide font-body">224 of 300 claimed</span>
              <span className="text-[10px] font-bold text-white">67%</span>
            </div>
            <div className="w-full bg-white/8 h-[2px]">
              <div className="bg-white h-[2px] transition-all" style={{ width: '67%' }} />
            </div>
          </div>

          <Link href="/drops" className="inline-flex items-center bg-white text-black text-[11px] uppercase tracking-[0.18em] font-bold px-10 py-4 hover:bg-brand-off-white transition-colors">
            Support This Drop
          </Link>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────────── */}
      <Newsletter />
    </>
  )
}
