'use client'

import { useState } from 'react'
import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import ProductMockup, { getMockupBg } from '@/components/ProductMockup'
import { notFound } from 'next/navigation'

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-black/8">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left">
        <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-black">{title}</span>
        <span className="text-black/40 text-base leading-none">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="pb-5 text-[12px] text-black/50 leading-relaxed font-body">{children}</div>}
    </div>
  )
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [activeThumb, setActiveThumb] = useState(0)

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)
  const relatedProducts = related.length >= 2 ? related : products.filter((p) => p.id !== product.id).slice(0, 4)

  // Show different color variants as thumbnails
  const thumbColors = product.colors.slice(0, 3)
  const activeColor = thumbColors[activeThumb] ?? product.colors[0]

  return (
    <div className="pt-0 min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-[#f7f6f3] border-b border-black/6 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-[11px] text-black/40 tracking-wide font-body">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-black transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-black/70">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: product visuals */}
          <div>
            {/* Main image */}
            <div
              className="relative aspect-square mb-4 flex items-center justify-center overflow-hidden"
              style={{ backgroundColor: getMockupBg(activeColor) }}
            >
              <div className="w-[62%] h-[62%]">
                <ProductMockup category={product.category} color={activeColor} />
              </div>
              {product.tag && (
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 font-semibold">{product.tag}</span>
                </div>
              )}
            </div>

            {/* Thumbnail color variants */}
            <div className="flex gap-3">
              {thumbColors.map((c, i) => (
                <button
                  key={c}
                  onClick={() => setActiveThumb(i)}
                  className={`relative w-20 h-20 flex items-center justify-center overflow-hidden border-2 transition-all ${
                    activeThumb === i ? 'border-black' : 'border-transparent hover:border-black/20'
                  }`}
                  style={{ backgroundColor: getMockupBg(c) }}
                >
                  <div className="w-[65%] h-[65%]">
                    <ProductMockup category={product.category} color={c} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: product info */}
          <div className="lg:pt-2">
            <div className="mb-3">
              <span className="text-[10px] uppercase tracking-[0.16em] text-black/40 border border-black/12 px-2.5 py-1 font-semibold">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-black mb-3 leading-tight">{product.name}</h1>
            <p className="text-2xl font-bold text-black mb-8">${product.price}</p>

            {/* Color */}
            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.16em] text-black/40 font-semibold mb-3">
                Color — <span className="text-black/70">{activeColor}</span>
              </p>
              <div className="flex gap-2">
                {product.colors.map((c, i) => (
                  <button
                    key={c}
                    onClick={() => { setSelectedColor(c); setActiveThumb(Math.min(i, thumbColors.length - 1)) }}
                    className={`w-8 h-8 border-2 transition-all ${
                      selectedColor === c ? 'border-black scale-110' : 'border-black/12 hover:border-black/40'
                    }`}
                    style={{ backgroundColor: c }}
                    title={c}
                  />
                ))}
              </div>
            </div>

            {/* Size */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-[10px] uppercase tracking-[0.16em] text-black/40 font-semibold">Size</p>
                <button className="text-[10px] text-black/40 hover:text-black transition-colors underline underline-offset-2">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-10 text-[11px] font-semibold border transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-black/15 text-black hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && <p className="text-[11px] text-black/35 mt-2 font-body">Select a size to continue</p>}
            </div>

            {/* Description */}
            <p className="text-[13px] text-black/50 leading-relaxed mb-8 font-body">{product.description}</p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 mb-10">
              <button className="w-full bg-black text-white text-[11px] uppercase tracking-[0.18em] font-bold py-4 hover:bg-[#1a1a1a] transition-colors">
                Add to Cart
              </button>
              <button className="w-full border border-black text-black text-[11px] uppercase tracking-[0.18em] font-bold py-4 hover:bg-black hover:text-white transition-colors">
                Buy Now
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-black/8">
              {['Made on Demand', 'Free Shipping $75+', '30-Day Returns', 'Premium Quality'].map((b) => (
                <span key={b} className="text-[10px] uppercase tracking-[0.1em] text-black/40 font-semibold">✓ {b}</span>
              ))}
            </div>

            {/* Accordions */}
            <Accordion title="Fit & Material">
              <p className="mb-2"><span className="font-semibold text-black/70">Material:</span> {product.material}</p>
              <p><span className="font-semibold text-black/70">Fit:</span> {product.fit}</p>
            </Accordion>
            <Accordion title="Shipping & Returns">
              <p>{product.shipping}</p>
            </Accordion>
            <Accordion title="Made on Demand">
              <p>This product is made to order. MNTR4 uses on-demand production to eliminate waste and overstock. Your item is created specifically for you — a more responsible way to shop fashion.</p>
            </Accordion>
          </div>
        </div>

        {/* Related products */}
        <div className="mt-24 pt-16 border-t border-black/6">
          <div className="mb-10">
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 font-semibold mb-2">You might also like</p>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-black leading-none">Related Products</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} {...p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
