'use client'

import { useState } from 'react'
import CartItem from '@/components/CartItem'
import Link from 'next/link'
import { products } from '@/data/products'

export default function CartPage() {
  const [promoCode, setPromoCode] = useState('')
  const [promoApplied, setPromoApplied] = useState(false)
  const [isEmpty] = useState(false)

  const sampleItems = [
    { ...products[0], size: 'M', color: '#000000', initialQuantity: 1 },
    { ...products[1], size: 'L', color: '#1a1a1a', initialQuantity: 1 },
  ]

  const subtotal = sampleItems.reduce((sum, item) => sum + item.price * (item.initialQuantity || 1), 0)
  const shipping = subtotal >= 75 ? 0 : 8
  const total = subtotal + shipping

  if (isEmpty) {
    return (
      <div className="pt-16 min-h-screen bg-brand-off-white flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 border-2 border-brand-light-gray rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-brand-mid-gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z"
              />
            </svg>
          </div>
          <h2 className="text-lg font-black tracking-tighter text-brand-black mb-2">
            Your cart is empty
          </h2>
          <p className="text-xs text-brand-mid-gray leading-relaxed mb-8">
            Looks like you haven&apos;t added anything yet. Browse the shop to find something you
            love.
          </p>
          <Link
            href="/shop"
            className="inline-block bg-brand-black text-white text-xs uppercase tracking-widest font-bold px-8 py-3.5 hover:bg-brand-charcoal transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 min-h-screen bg-brand-off-white">
      <div className="bg-white border-b border-brand-light-gray px-6 py-5">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-black tracking-tighter text-brand-black">
            Cart
            <span className="text-brand-mid-gray font-normal text-base ml-2">
              ({sampleItems.length} items)
            </span>
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-brand-light-gray px-6">
              {sampleItems.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  slug={item.slug}
                  name={item.name}
                  price={item.price}
                  category={item.category}
                  size={item.size}
                  color={item.color}
                  initialQuantity={item.initialQuantity}
                />
              ))}
            </div>

            {/* Continue shopping */}
            <div className="mt-6">
              <Link
                href="/shop"
                className="text-xs uppercase tracking-widest text-brand-mid-gray hover:text-brand-black transition-colors font-medium"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white border border-brand-light-gray p-6 sticky top-24">
              <h2 className="text-xs uppercase tracking-widest font-bold text-brand-black mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-xs text-brand-mid-gray tracking-wide">Subtotal</span>
                  <span className="text-xs font-semibold text-brand-black">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-xs text-brand-mid-gray tracking-wide">Shipping</span>
                  <span className="text-xs font-semibold text-brand-black">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-700">
                    <span className="text-xs tracking-wide">Promo discount</span>
                    <span className="text-xs font-semibold">−$5.00</span>
                  </div>
                )}
              </div>

              <div className="border-t border-brand-light-gray pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-black">
                    Estimated Total
                  </span>
                  <span className="text-base font-black text-brand-black">
                    ${(promoApplied ? total - 5 : total).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Promo code */}
              <div className="mb-5">
                <label className="text-xs uppercase tracking-widest text-brand-mid-gray font-medium block mb-2">
                  Promo Code
                </label>
                <div className="flex gap-0">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 border border-brand-light-gray text-xs px-3 py-2.5 text-brand-black placeholder:text-brand-mid-gray focus:outline-none focus:border-brand-black transition-colors min-w-0"
                  />
                  <button
                    onClick={() => {
                      if (promoCode === 'MNTR4') setPromoApplied(true)
                    }}
                    className="bg-brand-black text-white text-xs uppercase tracking-widest font-medium px-4 py-2.5 hover:bg-brand-charcoal transition-colors shrink-0"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <p className="text-xs text-green-700 mt-1.5 tracking-wide">Code applied! −$5.00</p>
                )}
              </div>

              {/* Checkout CTA */}
              <button className="w-full bg-brand-black text-white text-xs uppercase tracking-widest font-bold py-4 hover:bg-brand-charcoal transition-colors mb-3">
                Checkout
              </button>
              <p className="text-xs text-brand-mid-gray text-center tracking-wide">
                Secure checkout · Made on demand
              </p>

              {/* Free shipping note */}
              {shipping > 0 && (
                <div className="mt-4 pt-4 border-t border-brand-light-gray">
                  <p className="text-xs text-brand-mid-gray text-center tracking-wide">
                    Add ${(75 - subtotal).toFixed(2)} more for free shipping
                  </p>
                  <div className="mt-2 w-full bg-brand-light-gray h-1">
                    <div
                      className="bg-brand-black h-1 transition-all"
                      style={{ width: `${Math.min((subtotal / 75) * 100, 100)}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
