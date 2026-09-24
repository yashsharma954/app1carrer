import { useState } from 'react'
import { products } from '../products'
import ProductCard from './ProductCard'

const filterTabs = [
  { label: 'All Equipment', value: 'All' },
  { label: 'Cricket Bats', value: 'Bats' },
  { label: 'Match Balls', value: 'Balls' },
  { label: 'Protective Gear', value: 'Protective Gear' },
  { label: 'Kit Bags', value: 'Kit Bags' },
]

export default function ProductGrid({ onAdd, onQuickView, activeCategory, onSelectCategory }) {
  const [sortBy, setSortBy] = useState('featured')

  // Filter products by selected category
  const filteredProducts = products.filter((p) => {
    if (activeCategory === 'All') return true
    return (
      p.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      activeCategory.toLowerCase().includes(p.category.toLowerCase())
    )
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return a.id - b.id
  })

  return (
    <section
      id="products"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 border-t border-ink/5"
    >
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
        <div>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-ball block mb-1.5 sm:mb-2">
            Match Tested Catalog
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink font-bold leading-tight">
            Hand-Picked Cricket Gear
          </h2>
          <p className="text-xs sm:text-sm text-ink/60 mt-1">
            Every item calibrated for optimum weight, balance, and ping.
          </p>
        </div>

        {/* Sort selector */}
        <div className="flex items-center gap-2 sm:gap-3 self-start sm:self-auto">
          <span className="text-xs text-ink/60 font-medium whitespace-nowrap">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white border border-ink/15 rounded-xl px-3 py-2 text-xs font-medium text-ink focus:outline-none focus:border-pitch shadow-sm min-w-0"
          >
            <option value="featured">Featured Collection</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Filter Tabs - Horizontal Scroll on Mobile */}
      <div className="relative mb-6 sm:mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-1 px-1 no-scrollbar snap-x">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.value
            const count =
              tab.value === 'All'
                ? null
                : products.filter((p) =>
                    p.category.toLowerCase().includes(tab.value.toLowerCase())
                  ).length

            return (
              <button
                key={tab.value}
                onClick={() => onSelectCategory(tab.value)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-200 snap-start ${
                  isActive
                    ? 'bg-pitch text-linen shadow-md'
                    : 'bg-linen-dim text-ink/70 hover:bg-ink/10 hover:text-ink'
                }`}
              >
                {tab.label}
                {count !== null && (
                  <span className="ml-1 opacity-60">({count})</span>
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* Product Grid */}
      {sortedProducts.length === 0 ? (
        <div className="text-center py-12 sm:py-16 bg-white rounded-2xl border border-ink/10">
          <p className="text-ink/60 text-sm">No items found in this category.</p>
          <button
            onClick={() => onSelectCategory('All')}
            className="mt-3 text-xs font-semibold text-ball hover:underline"
          >
            Show All Gear
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {sortedProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAdd={onAdd}
              onQuickView={onQuickView}
            />
          ))}
        </div>
      )}

      {/* Bottom Assurance Notice */}
      <div className="mt-10 sm:mt-12 md:mt-14 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-linen-dim/60 border border-ink/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-ink/70">
        <div className="flex items-start sm:items-center gap-3">
          <span className="text-xl sm:text-2xl shrink-0">🏏</span>
          <div>
            <p className="font-semibold text-ink text-sm sm:text-xs">
              Need a custom bat weight or specialized knocking?
            </p>
            <p className="text-[11px] text-ink/60 mt-0.5">
              We prepare bats between 1160g - 1240g with custom handle ovality.
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          className="bg-pitch text-linen px-5 py-2.5 rounded-full font-medium hover:bg-pitch-deep transition-colors whitespace-nowrap text-xs w-full sm:w-auto text-center"
        >
          Talk to Master Batmaker
        </a>
      </div>
    </section>
  )
}