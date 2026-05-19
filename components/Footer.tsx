import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="md:max-w-[220px]">
            <p className="font-bold tracking-[0.2em] text-[13px] text-white mb-4">[ MNTR4 ]</p>
            <p className="text-[12px] text-white/30 leading-relaxed font-body">
              Minimal aesthetic apparel, made on demand. Original designs, premium essentials, zero overproduction.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="text-white/25 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>
              <a href="#" aria-label="X" className="text-white/25 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-semibold mb-5">Shop</p>
              <ul className="space-y-3">
                {[
                  { l: 'New Drops',    href: '/drops'       },
                  { l: 'T-Shirts',     href: '/shop'        },
                  { l: 'Hoodies',      href: '/shop'        },
                  { l: 'Sweatshirts',  href: '/shop'        },
                  { l: 'Hats',         href: '/shop'        },
                  { l: 'Tote Bags',    href: '/shop'        },
                  { l: 'Best Sellers', href: '/shop'        },
                ].map((item) => (
                  <li key={item.l}>
                    <Link href={item.href} className="text-[12px] text-white/35 hover:text-white transition-colors font-body">{item.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-semibold mb-5">Collections</p>
              <ul className="space-y-3">
                {[
                  { l: 'All Collections',    href: '/collections' },
                  { l: 'Minimal Essentials', href: '/collections' },
                  { l: 'MNTR4 Originals',    href: '/creators'   },
                  { l: 'Limited Drops',      href: '/drops'       },
                  { l: 'Black & White',      href: '/collections' },
                ].map((item) => (
                  <li key={item.l}>
                    <Link href={item.href} className="text-[12px] text-white/35 hover:text-white transition-colors font-body">{item.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-semibold mb-5">Company</p>
              <ul className="space-y-3 mb-8">
                {[
                  { l: 'About MNTR4', href: '/about' },
                  { l: 'Shipping',    href: '/about' },
                  { l: 'Returns',     href: '/about' },
                  { l: 'Contact',     href: '/about' },
                ].map((item) => (
                  <li key={item.l}>
                    <Link href={item.href} className="text-[12px] text-white/35 hover:text-white transition-colors font-body">{item.l}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/6 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/20 font-body">© 2024 MNTR4. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-[11px] text-white/20 hover:text-white/45 transition-colors font-body">Privacy</Link>
            <Link href="/about" className="text-[11px] text-white/20 hover:text-white/45 transition-colors font-body">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
