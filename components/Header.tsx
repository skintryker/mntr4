'use client'

import Link from 'next/link'
import { useState } from 'react'

const NAV = [
  { label: 'New Drops',   href: '/drops' },
  { label: 'Shop',        href: '/shop'  },
  { label: 'T-Shirts',    href: '/shop?category=T-Shirts' },
  { label: 'Hoodies',     href: '/shop?category=Hoodies'  },
  { label: 'Collections', href: '/collections' },
  { label: 'About',       href: '/about'       },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      {/* Promo bar */}
      <div className="bg-black text-white text-center py-2 px-4">
        <p className="text-[10px] uppercase tracking-[0.2em] font-medium">
          Free shipping on orders over $75 &nbsp;·&nbsp; Made on demand &nbsp;·&nbsp; No overstock
        </p>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[58px]">

          {/* Logo */}
          <Link href="/" className="font-bold tracking-[0.18em] text-[13px] text-black select-none shrink-0">
            [ MNTR4 ]
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center absolute left-1/2 -translate-x-1/2">
            {NAV.map((item, i, arr) => (
              <span key={item.label} className="flex items-center">
                <Link
                  href={item.href}
                  className="text-[11px] uppercase tracking-[0.13em] text-black/65 hover:text-black transition-colors font-medium px-3.5 py-1"
                >
                  {item.label}
                </Link>
                {i < arr.length - 1 && (
                  <span className="text-black/12 text-xs select-none">|</span>
                )}
              </span>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden md:flex text-black/55 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>

            <Link href="/cart" aria-label="Cart" className="relative text-black/55 hover:text-black transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-[18px] h-[18px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-black text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-semibold">2</span>
            </Link>

            <Link href="/shop" className="hidden md:inline-flex items-center bg-black text-white text-[11px] uppercase tracking-[0.14em] font-semibold px-4 py-2 hover:bg-[#1a1a1a] transition-colors">
              Shop Now
            </Link>

            {/* Mobile hamburger */}
            <button aria-label="Menu" className="lg:hidden text-black" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-black/8 px-6 py-8">
            <nav className="flex flex-col gap-5 mb-8">
              {NAV.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setMobileOpen(false)}
                  className="text-sm uppercase tracking-[0.14em] text-black font-medium">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4 pt-6 border-t border-black/8">
              <Link href="/shop" onClick={() => setMobileOpen(false)} className="bg-black text-white text-[11px] uppercase tracking-[0.14em] font-semibold px-5 py-2.5">
                Shop Now
              </Link>
              <Link href="/cart" onClick={() => setMobileOpen(false)} className="text-[11px] uppercase tracking-[0.14em] text-black/55 font-medium">
                Cart (2)
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
