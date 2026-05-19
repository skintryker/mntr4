'use client'

import { useState } from 'react'

interface Filters {
  categories: string[]
  colors: string[]
  priceMin: number
  priceMax: number
  productTypes: string[]
}

interface FilterSidebarProps {
  selectedFilters: Filters
  onChange: (filters: Filters) => void
}

const CATEGORIES = [
  'T-Shirts',
  'Hoodies',
  'Sweatshirts',
  'Hats',
  'Tote Bags',
  'Sweatpants',
  'Sets',
]

const COLORS = [
  { label: 'Black', value: '#000000' },
  { label: 'Off White', value: '#f5f5f0' },
  { label: 'Beige', value: '#e8e4dc' },
  { label: 'Light Gray', value: '#d4d0c8' },
  { label: 'Mid Gray', value: '#888888' },
  { label: 'Charcoal', value: '#1a1a1a' },
]

const PRODUCT_TYPES = ['New', 'Best Seller', 'Limited', 'All']

export default function FilterSidebar({ selectedFilters, onChange }: FilterSidebarProps) {
  const [openSections, setOpenSections] = useState({
    category: true,
    color: true,
    price: true,
    type: true,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const toggleCategory = (cat: string) => {
    const next = selectedFilters.categories.includes(cat)
      ? selectedFilters.categories.filter((c) => c !== cat)
      : [...selectedFilters.categories, cat]
    onChange({ ...selectedFilters, categories: next })
  }

  const toggleColor = (color: string) => {
    const next = selectedFilters.colors.includes(color)
      ? selectedFilters.colors.filter((c) => c !== color)
      : [...selectedFilters.colors, color]
    onChange({ ...selectedFilters, colors: next })
  }

  const toggleType = (type: string) => {
    const next = selectedFilters.productTypes.includes(type)
      ? selectedFilters.productTypes.filter((t) => t !== type)
      : [...selectedFilters.productTypes, type]
    onChange({ ...selectedFilters, productTypes: next })
  }

  const clearAll = () => {
    onChange({ categories: [], colors: [], priceMin: 0, priceMax: 500, productTypes: [] })
  }

  const SectionHeader = ({
    title,
    section,
  }: {
    title: string
    section: keyof typeof openSections
  }) => (
    <button
      onClick={() => toggleSection(section)}
      className="w-full flex items-center justify-between py-3 border-b border-brand-light-gray"
    >
      <span className="text-xs uppercase tracking-widest font-semibold text-brand-black">
        {title}
      </span>
      <span className="text-brand-mid-gray text-xs">{openSections[section] ? '−' : '+'}</span>
    </button>
  )

  return (
    <aside className="w-full md:w-56 shrink-0">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs uppercase tracking-widest font-semibold text-brand-black">Filters</p>
        <button
          onClick={clearAll}
          className="text-xs text-brand-mid-gray hover:text-brand-black transition-colors tracking-wide"
        >
          Clear all
        </button>
      </div>

      {/* Categories */}
      <div className="mb-2">
        <SectionHeader title="Category" section="category" />
        {openSections.category && (
          <div className="pt-3 pb-4 space-y-2">
            {CATEGORIES.map((cat) => (
              <label key={cat} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedFilters.categories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="w-3.5 h-3.5 accent-brand-black"
                />
                <span className="text-xs text-brand-black tracking-wide group-hover:text-brand-mid-gray transition-colors">
                  {cat}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Colors */}
      <div className="mb-2">
        <SectionHeader title="Color" section="color" />
        {openSections.color && (
          <div className="pt-3 pb-4">
            <div className="flex flex-wrap gap-2">
              {COLORS.map((c) => (
                <button
                  key={c.value}
                  title={c.label}
                  onClick={() => toggleColor(c.value)}
                  className={`w-7 h-7 rounded-full border-2 transition-all ${
                    selectedFilters.colors.includes(c.value)
                      ? 'border-brand-black scale-110'
                      : 'border-brand-light-gray hover:border-brand-mid-gray'
                  }`}
                  style={{ backgroundColor: c.value }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Price */}
      <div className="mb-2">
        <SectionHeader title="Price Range" section="price" />
        {openSections.price && (
          <div className="pt-3 pb-4 space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="text-xs text-brand-mid-gray tracking-wide mb-1 block">Min</label>
                <input
                  type="number"
                  value={selectedFilters.priceMin}
                  min={0}
                  onChange={(e) =>
                    onChange({ ...selectedFilters, priceMin: Number(e.target.value) })
                  }
                  className="w-full border border-brand-light-gray text-xs px-2 py-1.5 text-brand-black focus:outline-none focus:border-brand-black transition-colors"
                />
              </div>
              <span className="text-brand-mid-gray text-xs mt-4">–</span>
              <div className="flex-1">
                <label className="text-xs text-brand-mid-gray tracking-wide mb-1 block">Max</label>
                <input
                  type="number"
                  value={selectedFilters.priceMax}
                  min={0}
                  onChange={(e) =>
                    onChange({ ...selectedFilters, priceMax: Number(e.target.value) })
                  }
                  className="w-full border border-brand-light-gray text-xs px-2 py-1.5 text-brand-black focus:outline-none focus:border-brand-black transition-colors"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Type */}
      <div className="mb-2">
        <SectionHeader title="Product Type" section="type" />
        {openSections.type && (
          <div className="pt-3 pb-4 space-y-2">
            {PRODUCT_TYPES.map((type) => (
              <label key={type} className="flex items-center gap-2.5 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedFilters.productTypes.includes(type)}
                  onChange={() => toggleType(type)}
                  className="w-3.5 h-3.5 accent-brand-black"
                />
                <span className="text-xs text-brand-black tracking-wide group-hover:text-brand-mid-gray transition-colors">
                  {type}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>
    </aside>
  )
}
