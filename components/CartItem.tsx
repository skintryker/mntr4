'use client'

import { useState } from 'react'

interface CartItemProps {
  id: number
  slug: string
  name: string
  price: number
  category: string
  size: string
  color: string
  initialQuantity?: number
}

export default function CartItem({
  name,
  price,
  category,
  size,
  color,
  initialQuantity = 1,
}: CartItemProps) {
  const [quantity, setQuantity] = useState(initialQuantity)
  const [removed, setRemoved] = useState(false)

  if (removed) return null

  return (
    <div className="flex gap-5 py-6 border-b border-brand-light-gray">
      {/* Image placeholder */}
      <div className="w-24 h-24 shrink-0 bg-gradient-to-br from-brand-light-gray to-brand-beige relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:8px_8px]" />
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between gap-4 mb-1">
          <div>
            <p className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium mb-0.5">
              {category}
            </p>
            <h3 className="text-sm font-semibold text-brand-black tracking-tight">{name}</h3>
          </div>
          <p className="text-sm font-bold text-brand-black shrink-0">
            ${(price * quantity).toFixed(2)}
          </p>
        </div>

        {/* Badges */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs uppercase tracking-widest text-brand-mid-gray border border-brand-light-gray px-2 py-0.5">
            {size}
          </span>
          <span
            className="w-4 h-4 rounded-full border border-brand-light-gray"
            style={{ backgroundColor: color }}
          />
        </div>

        {/* Quantity + Remove */}
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-brand-light-gray">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 flex items-center justify-center text-brand-black hover:bg-brand-off-white transition-colors text-sm"
            >
              −
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-xs font-medium text-brand-black border-x border-brand-light-gray">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 flex items-center justify-center text-brand-black hover:bg-brand-off-white transition-colors text-sm"
            >
              +
            </button>
          </div>
          <button
            onClick={() => setRemoved(true)}
            className="text-xs text-brand-mid-gray hover:text-brand-black transition-colors tracking-wide underline underline-offset-2"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )
}
