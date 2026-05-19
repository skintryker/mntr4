import Link from 'next/link'
import CollectionCard from '@/components/CollectionCard'
import ProductCard from '@/components/ProductCard'
import Newsletter from '@/components/Newsletter'
import ProductMockup, { getMockupBg } from '@/components/ProductMockup'
import { products } from '@/data/products'
import { collections } from '@/data/collections'

// Product categories (TeePublic-style chips)
const PRODUCT_CATS = [
  { name: 'T-Shirts',    href: '/shop', emoji: '👕' },
  { name: 'Hoodies',     href: '/shop', emoji: '🧥' },
  { name: 'Sweatshirts', href: '/shop', emoji: '🧣' },
  { name: 'Hats',        href: '/shop', emoji: '🧢' },
  { name: 'Tote Bags',   href: '/shop', emoji: '🛍️' },
  { name: 'Sweatpants',  href: '/shop', emoji: '👖' },
  { name: 'Sets',        href: '/shop', emoji: '✦' },
]

// Theme categories
const THEMES = [
  { name: 'Aesthetic',    bg: '#e8e4dc', dark: false },
  { name: 'Minimal',      bg: '#1a1a1a', dark: true  },
  { name: 'Vintage',      bg: '#d4cfc4', dark: false },
  { name: 'New York',     bg: '#0a0a0a', dark: true  },
  { name: 'Lifestyle',    bg: '#e0dbd2', dark: false },
  { name: 'Motivational', bg: '#c8c4bc', dark: false },
  { name: 'Fitness',      bg: '#2a2a2a', dark: true  },
  { name: 'Brazil',       bg: '#e6e2da', dark: false },
]

export default function HomePage() {
  const featured  = products.slice(0, 4)
  const bestSellers = products.filter((p) => p.tag === 'Best Seller').concat(products.filter((p) => !p.tag)).slice(0, 4)
  const newDrops  = products.filter((p) => p.tag === 'New' || p.tag === 'Limited').slice(0, 4)
  const featuredCollections = collections.slice(0, 3)

  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className="min-h-[92vh] bg-white flex flex-col lg:flex-row">
        {/* Left: editorial headline */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 lg:py-0 lg:max-w-[50%]">
          <p className="text-[10px] uppercase tracking-[0.28em] text-black/35 font-semibold mb-6">
            Minimal · Aesthetic · On Demand
          </p>
          <h1 className="font-bold text-black leading-[0.91] tracking-tight mb-5"
              style={{ fontSize: 'clamp(3rem, 6.5vw, 6rem)' }}>
            Minimal<br />Aesthetic<br />Apparel
          </h1>
          <p className="text-[14px] text-black/45 max-w-xs leading-relaxed mb-10 font-body">
            Original designs, premium essentials, zero overproduction. Every piece made only when ordered.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-14">
            <Link href="/shop" className="inline-flex items-center justify-center bg-black text-white text-[11px] uppercase tracking-[0.18em] font-semibold px-8 py-3.5 hover:bg-[#1a1a1a] transition-colors">
              Shop All Designs
            </Link>
            <Link href="/drops" className="inline-flex items-center justify-center border border-black/20 text-black text-[11px] uppercase tracking-[0.18em] font-semibold px-8 py-3.5 hover:border-black transition-colors">
              New Drops
            </Link>
          </div>
          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {PRODUCT_CATS.map((c) => (
              <Link key={c.name} href={c.href}
                className="text-[10px] uppercase tracking-[0.12em] font-semibold border border-black/12 text-black/60 px-3 py-1.5 hover:border-black hover:text-black transition-colors">
                {c.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right: 2×2 product showcase grid */}
        <div className="flex-1 grid grid-cols-2 min-h-[55vw] lg:min-h-0">
          {/* Product 1: Black hoodie */}
          <Link href="/product/classic-black-hoodie" className="group relative overflow-hidden flex items-center justify-center p-8"
                style={{ backgroundColor: getMockupBg('#000000') }}>
            <div className="w-full max-w-[160px] transition-transform duration-500 group-hover:scale-105">
              <ProductMockup category="Hoodies" color="#000000" />
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="text-[9px] uppercase tracking-[0.16em] text-black/40 font-medium">Best Seller</p>
              <p className="text-[12px] font-semibold text-black tracking-tight">Classic Black Hoodie</p>
            </div>
          </Link>

          {/* Product 2: Off-white tee */}
          <Link href="/product/mntr4-logo-tee" className="group relative overflow-hidden flex items-center justify-center p-8"
                style={{ backgroundColor: getMockupBg('#f5f5f0') }}>
            <div className="w-full max-w-[160px] transition-transform duration-500 group-hover:scale-105">
              <ProductMockup category="T-Shirts" color="#f5f5f0" />
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="text-[9px] uppercase tracking-[0.16em] text-black/40 font-medium">MNTR4 Original</p>
              <p className="text-[12px] font-semibold text-black tracking-tight">Logo Tee — $32</p>
            </div>
          </Link>

          {/* Product 3: Beige hoodie */}
          <Link href="/product/minimal-bracket-hoodie" className="group relative overflow-hidden flex items-center justify-center p-8"
                style={{ backgroundColor: getMockupBg('#e8e4dc') }}>
            <div className="w-full max-w-[160px] transition-transform duration-500 group-hover:scale-105">
              <ProductMockup category="Hoodies" color="#e8e4dc" />
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="text-[9px] uppercase tracking-[0.16em] text-black/40 font-medium">New Drop</p>
              <p className="text-[12px] font-semibold text-black tracking-tight">Bracket Hoodie — $68</p>
            </div>
          </Link>

          {/* Product 4: Black cap */}
          <Link href="/product/black-logo-cap" className="group relative overflow-hidden flex items-center justify-center p-8"
                style={{ backgroundColor: getMockupBg('#0a0a0a') }}>
            <div className="w-full max-w-[140px] transition-transform duration-500 group-hover:scale-105">
              <ProductMockup category="Hats" color="#0a0a0a" />
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="text-[9px] uppercase tracking-[0.16em] text-white/35 font-medium">Accessory</p>
              <p className="text-[12px] font-semibold text-white tracking-tight">Logo Cap — $34</p>
            </div>
          </Link>
        </div>
      </section>

      {/* ── SEARCH BAR ──────────────────────────────────────────── */}
      <section className="bg-[#f7f6f3] border-y border-black/6 py-8 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center border border-black/15 bg-white focus-within:border-black transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4 ml-4 text-black/30 shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Search designs, styles, themes..."
              className="flex-1 bg-transparent text-[13px] text-black placeholder:text-black/30 px-4 py-3.5 outline-none font-body"
            />
            <Link href="/shop" className="bg-black text-white text-[11px] uppercase tracking-[0.14em] font-semibold px-5 py-3.5 shrink-0 hover:bg-[#1a1a1a] transition-colors">
              Search
            </Link>
          </div>
          {/* Quick theme pills */}
          <div className="flex flex-wrap items-center gap-2 mt-4">
            <span className="text-[10px] text-black/30 font-medium mr-1 uppercase tracking-widest">Popular:</span>
            {['Aesthetic', 'Minimal', 'New York', 'Vintage', 'Lifestyle'].map((t) => (
              <Link key={t} href="/shop"
                className="text-[10px] text-black/55 hover:text-black px-2.5 py-1 border border-black/10 hover:border-black/30 transition-colors font-medium uppercase tracking-wide">
                {t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORY CHIPS ──────────────────────────────── */}
      <section className="bg-white py-10 px-6 border-b border-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
            <Link href="/shop" className="shrink-0 text-[11px] uppercase tracking-[0.14em] font-bold bg-black text-white px-5 py-2.5">
              All Products
            </Link>
            {PRODUCT_CATS.map((c) => (
              <Link key={c.name} href={c.href}
                className="shrink-0 text-[11px] uppercase tracking-[0.14em] font-semibold border border-black/12 text-black/65 hover:text-black hover:border-black px-5 py-2.5 transition-colors">
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED DESIGNS ────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">MNTR4 Originals</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-none">Featured Designs</h2>
            </div>
            <Link href="/shop" className="hidden md:block text-[11px] uppercase tracking-[0.14em] text-black/40 hover:text-black transition-colors font-medium">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2">
            {featured.map((p) => <ProductCard key={p.id} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS ────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10 bg-[#f7f6f3] border-t border-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">Community favorites</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-none">Best Sellers</h2>
            </div>
            <Link href="/shop" className="hidden md:block text-[11px] uppercase tracking-[0.14em] text-black/40 hover:text-black transition-colors font-medium">
              Shop All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2">
            {bestSellers.map((p) => <ProductCard key={p.id} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── SHOP BY THEME ───────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10 bg-white border-t border-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">Browse designs</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-none">Shop by Theme</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {THEMES.map((theme) => (
              <Link key={theme.name} href="/shop"
                className="group relative h-24 flex items-end px-4 pb-4 overflow-hidden transition-transform duration-300 hover:scale-[0.98]"
                style={{ backgroundColor: theme.bg }}>
                {/* Subtle MNTR4 watermark */}
                <span className={`absolute top-3 right-3 text-[8px] font-bold tracking-[0.2em] opacity-10 ${theme.dark ? 'text-white' : 'text-black'}`}>
                  [ MNTR4 ]
                </span>
                <div className="relative z-10">
                  <p className={`text-[11px] uppercase tracking-[0.15em] font-bold leading-tight ${theme.dark ? 'text-white' : 'text-black'}`}>
                    {theme.name}
                  </p>
                  <p className={`text-[9px] mt-0.5 uppercase tracking-wider ${theme.dark ? 'text-white/35' : 'text-black/35'}`}>
                    Shop designs →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLECTIONS ─────────────────────────────────────────── */}
      <section className="py-20 px-6 md:px-10 bg-[#f7f6f3] border-t border-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">Curated edits</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-none">Collections</h2>
            </div>
            <Link href="/collections" className="hidden md:block text-[11px] uppercase tracking-[0.14em] text-black/40 hover:text-black transition-colors font-medium">
              All Collections →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <section className="py-20 px-6 md:px-10 bg-white border-t border-black/6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">Just landed</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black leading-none">New Drops</h2>
            </div>
            <Link href="/drops" className="hidden md:block text-[11px] uppercase tracking-[0.14em] text-black/40 hover:text-black transition-colors font-medium">
              See All →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2">
            {newDrops.map((p) => <ProductCard key={p.id} {...p} />)}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL BANNER ────────────────────────────────────── */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[340px]">
          <div className="bg-black flex flex-col justify-center px-12 py-16">
            <p className="text-[10px] uppercase tracking-[0.22em] text-white/25 font-semibold mb-4">MNTR4 Philosophy</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-6">
              Premium aesthetic<br />apparel, made only<br />when ordered.
            </h2>
            <Link href="/about" className="text-[11px] uppercase tracking-[0.18em] text-white font-semibold border-b border-white/25 pb-0.5 hover:border-white transition-colors w-fit">
              Our Story →
            </Link>
          </div>
          <div className="bg-[#e8e4dc] flex items-center justify-center px-12 py-16">
            <div className="text-center">
              <p className="font-bold tracking-[0.22em] text-[28px] text-black/10 mb-4 select-none">[ MNTR4 ]</p>
              <div className="flex flex-col gap-2">
                {['Original Designs', 'Premium Quality', 'Zero Overproduction', 'Made on Demand'].map((l) => (
                  <p key={l} className="text-[10px] uppercase tracking-[0.18em] text-black/40 font-semibold">· {l} ·</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIMITED DROP BANNER ─────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-[9px] uppercase tracking-[0.24em] bg-white/8 text-white/40 px-3 py-1.5 mb-8 font-semibold">
            Limited Edition
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-none">
            MNTR4 × DROP 001
          </h2>
          <p className="text-[13px] text-white/40 leading-relaxed max-w-md mx-auto mb-12 font-body">
            A premium heavyweight tee with exclusive bracket graphic. Available only during this limited window. No restocks.
          </p>
          <div className="flex items-center justify-center gap-4 mb-12">
            {[{ v: '02', l: 'Days' }, { v: '14', l: 'Hrs' }, { v: '32', l: 'Min' }].map((u, i) => (
              <div key={u.l} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 border border-white/10 bg-white/3 flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-white tracking-tight">{u.v}</span>
                  </div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/30 font-semibold mt-2">{u.l}</p>
                </div>
                {i < 2 && <span className="text-white/20 text-xl mb-4">:</span>}
              </div>
            ))}
          </div>
          <div className="max-w-sm mx-auto mb-10">
            <div className="flex justify-between mb-2">
              <span className="text-[10px] text-white/35 font-body">224 of 300 claimed</span>
              <span className="text-[10px] font-bold text-white">67%</span>
            </div>
            <div className="w-full bg-white/8 h-[2px]">
              <div className="bg-white h-[2px]" style={{ width: '67%' }} />
            </div>
          </div>
          <Link href="/drops" className="inline-flex items-center bg-white text-black text-[11px] uppercase tracking-[0.18em] font-bold px-10 py-4 hover:bg-[#f7f6f3] transition-colors">
            Get This Drop
          </Link>
        </div>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────────── */}
      <Newsletter />
    </>
  )
}
