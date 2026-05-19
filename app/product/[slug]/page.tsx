'use client'

import { useState } from 'react'
import Link from 'next/link'
import { products } from '@/data/products'
import ProductCard from '@/components/ProductCard'
import { notFound } from 'next/navigation'

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

interface AccordionProps {
  title: string
  children: React.ReactNode
}

function Accordion({ title, children }: AccordionProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-t border-brand-light-gray">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="text-xs uppercase tracking-widest font-semibold text-brand-black">
          {title}
        </span>
        <span className="text-brand-mid-gray text-sm">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="pb-4 text-xs text-brand-mid-gray leading-relaxed">{children}</div>}
    </div>
  )
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [activeThumb, setActiveThumb] = useState(0)

  const related = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4)
  const fallbackRelated = products.filter((p) => p.id !== product.id).slice(0, 4)
  const relatedProducts = related.length >= 2 ? related : fallbackRelated

  const thumbBgs = [
    'from-brand-light-gray to-brand-beige',
    'from-brand-beige to-brand-light-gray',
    'from-brand-charcoal to-brand-near-black',
  ]

  return (
    <div className="pt-16 min-h-screen bg-brand-off-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-brand-light-gray px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-brand-mid-gray tracking-wide">
          <Link href="/" className="hover:text-brand-black transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-brand-black transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-brand-black">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Images */}
          <div>
            {/* Main image */}
            <div className={`relative aspect-square bg-gradient-to-br ${thumbBgs[activeThumb]} mb-4 overflow-hidden`}>
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:16px_16px]" />
              {product.tag && (
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-black text-white text-xs uppercase tracking-widest px-2 py-1 font-medium">
                    {product.tag}
                  </span>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {thumbBgs.map((bg, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`w-20 h-20 bg-gradient-to-br ${bg} relative overflow-hidden border-2 transition-all ${
                    activeThumb === i ? 'border-brand-black' : 'border-transparent hover:border-brand-light-gray'
                  }`}
                >
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:8px_8px]" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div>
            {/* Collection badge */}
            <div className="mb-3">
              <span className="text-xs uppercase tracking-widest text-brand-mid-gray border border-brand-light-gray px-2 py-1 font-medium">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-brand-black mb-2">
              {product.name}
            </h1>

            <p className="text-2xl font-bold text-brand-black mb-6">${product.price}</p>

            {/* Color swatches */}
            <div className="mb-6">
              <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-3">
                Color
              </p>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor === color
                        ? 'border-brand-black scale-110'
                        : 'border-brand-light-gray hover:border-brand-mid-gray'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium">
                  Size
                </p>
                <button className="text-xs text-brand-mid-gray hover:text-brand-black transition-colors underline underline-offset-2">
                  Size Guide
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-10 text-xs font-medium border transition-all ${
                      selectedSize === size
                        ? 'border-brand-black bg-brand-black text-white'
                        : 'border-brand-light-gray text-brand-black hover:border-brand-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-xs text-brand-mid-gray mt-2 tracking-wide">
                  Please select a size
                </p>
              )}
            </div>

            {/* Description */}
            <p className="text-sm text-brand-mid-gray leading-relaxed mb-6">{product.description}</p>

            {/* CTAs */}
            <div className="flex flex-col gap-3 mb-8">
              <button className="w-full bg-brand-black text-white text-xs uppercase tracking-widest font-bold py-4 hover:bg-brand-charcoal transition-colors">
                Add to Cart
              </button>
              <button className="w-full border border-brand-black text-brand-black text-xs uppercase tracking-widest font-bold py-4 hover:bg-brand-black hover:text-white transition-colors">
                Buy Now
              </button>
            </div>

            {/* Accordions */}
            <div>
              <Accordion title="Fit &amp; Material">
                <div className="space-y-2">
                  <p><strong className="text-brand-black">Material:</strong> {product.material}</p>
                  <p><strong className="text-brand-black">Fit:</strong> {product.fit}</p>
                </div>
              </Accordion>
              <Accordion title="Shipping &amp; Returns">
                <p>{product.shipping}</p>
              </Accordion>
              <Accordion title="Made on Demand">
                <p>
                  This product is made to order. MNTR4 uses on-demand production to eliminate waste
                  and overstocking. Your item is created specifically for you — contributing to a
                  more sustainable supply chain.
                </p>
              </Accordion>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-1">
              You might also like
            </p>
            <h2 className="text-2xl font-black tracking-tighter text-brand-black">
              Related Products
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                id={p.id}
                slug={p.slug}
                name={p.name}
                price={p.price}
                category={p.category}
                colors={p.colors}
                tag={p.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
