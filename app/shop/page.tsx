'use client'

import { useState, useMemo } from 'react'
import { products } from '@/data/products'
import FilterSidebar from '@/components/FilterSidebar'
import ProductGrid from '@/components/ProductGrid'

interface Filters {
  categories: string[]
  colors: string[]
  priceMin: number
  priceMax: number
  productTypes: string[]
}

const SORT_OPTIONS = [
  { value: 'trending', label: 'Trending' },
  { value: 'newest', label: 'Newest' },
  { value: 'best-sellers', label: 'Best Sellers' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
]

export default function ShopPage() {
  const [filters, setFilters] = useState<Filters>({
    categories: [],
    colors: [],
    priceMin: 0,
    priceMax: 500,
    productTypes: [],
  })
  const [sort, setSort] = useState('trending')
  const [search, setSearch] = useState('')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    let result = [...products]

    if (search) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.category.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category))
    }

    if (filters.colors.length > 0) {
      result = result.filter((p) => p.colors.some((c) => filters.colors.includes(c)))
    }

    if (filters.priceMin > 0) {
      result = result.filter((p) => p.price >= filters.priceMin)
    }

    if (filters.priceMax < 500) {
      result = result.filter((p) => p.price <= filters.priceMax)
    }

    if (filters.productTypes.length > 0 && !filters.productTypes.includes('All')) {
      result = result.filter((p) => p.tag && filters.productTypes.includes(p.tag))
    }

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'newest':
        result = [...result].filter((p) => p.tag === 'New').concat(result.filter((p) => p.tag !== 'New'))
        break
      case 'best-sellers':
        result = [...result].filter((p) => p.tag === 'Best Seller').concat(result.filter((p) => p.tag !== 'Best Seller'))
        break
      default:
        break
    }

    return result
  }, [filters, sort, search])

  return (
    <div className="pt-16 min-h-screen bg-brand-off-white">
      {/* Top bar */}
      <div className="bg-white border-b border-brand-light-gray px-6 py-5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <div>
              <h1 className="text-xl font-black tracking-tighter text-brand-black">Shop</h1>
              <p className="text-xs text-brand-mid-gray tracking-wide mt-0.5">
                {filtered.length} products
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              {/* Search */}
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-brand-mid-gray"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="pl-9 pr-4 py-2.5 border border-brand-light-gray text-xs focus:outline-none focus:border-brand-black transition-colors bg-white text-brand-black placeholder:text-brand-mid-gray min-w-52"
                />
              </div>

              {/* Sort */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-brand-light-gray text-xs px-3 py-2.5 bg-white text-brand-black focus:outline-none focus:border-brand-black transition-colors uppercase tracking-wide cursor-pointer"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>

              {/* Mobile filter toggle */}
              <button
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="md:hidden border border-brand-light-gray text-xs px-4 py-2.5 bg-white text-brand-black uppercase tracking-widest font-medium"
              >
                Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-10">
          {/* Sidebar — desktop always visible, mobile conditional */}
          <div className={`${mobileFiltersOpen ? 'block' : 'hidden'} md:block`}>
            <FilterSidebar selectedFilters={filters} onChange={setFilters} />
          </div>

          {/* Product grid */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={filtered} columns={3} />
          </div>
        </div>
      </div>
    </div>
  )
}
