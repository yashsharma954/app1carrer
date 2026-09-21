import { useState } from 'react'
import { BatIcon, BallIcon, PadIcon, GloveIcon, BagIcon } from './icons/ProductIcons'

const iconMap = {
  bat: BatIcon,
  ball: BallIcon,
  pad: PadIcon,
  glove: GloveIcon,
  bag: BagIcon,
}

export default function ProductCard({ product, onAdd, onQuickView }) {
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [justAdded, setJustAdded] = useState(false)
  const [imgError, setImgError] = useState(false)
  const Icon = iconMap[product.icon] || BatIcon

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAddClick = (e) => {
    e.stopPropagation()
    onAdd(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 1200)
  }

  return (
    <div className="group bg-white rounded-2xl border border-ink/10 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Real Product Image Stage */}
      <div
        onClick={() => onQuickView(product)}
        className="relative aspect-square bg-gradient-to-b from-[#FAF7F0] to-[#EFEAE1] flex items-center justify-center cursor-pointer overflow-hidden"
      >
        {/* Badges on top left */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          {product.tag && (
            <span className="bg-ball text-linen text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
              {product.tag}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-pitch text-willow text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm border border-willow/30">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Wishlist button on top right */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            setIsWishlisted(!isWishlisted)
          }}
          className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur hover:bg-white text-ink shadow-sm flex items-center justify-center transition-transform active:scale-90"
          aria-label="Wishlist"
        >
          <span className={`text-sm ${isWishlisted ? 'text-ball' : 'text-ink/40'}`}>
            {isWishlisted ? '♥' : '♡'}
          </span>
        </button>

        {/* Real Product Photo or Fallback Icon */}
        {product.image && !imgError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full p-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
            <Icon className="w-4/5 h-4/5 drop-shadow-[0_12px_18px_rgba(0,0,0,0.18)]" />
          </div>
        )}

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-x-4 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onQuickView(product)
            }}
            className="w-full bg-pitch/95 hover:bg-pitch backdrop-blur text-linen text-xs font-semibold py-2.5 rounded-xl shadow-xl transition-colors flex items-center justify-center gap-1.5"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Quick Specs & Inspection</span>
          </button>
        </div>
      </div>

      {/* Product Information Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Badge */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[10px] font-bold text-ball uppercase tracking-widest">
              {product.category}
            </span>
            <span className="text-[10px] text-ink/60 bg-ink/5 px-2 py-0.5 rounded font-medium truncate">
              {product.badge}
            </span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onQuickView(product)}
            className="font-display font-bold text-base text-ink leading-snug mb-2 group-hover:text-pitch transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Star Rating */}
          <div className="flex items-center gap-1.5 mb-3.5">
            <div className="flex text-amber-500 text-xs">
              {'★'.repeat(5)}
            </div>
            <span className="text-xs font-bold text-ink/75">{product.rating}</span>
            <span className="text-[11px] text-ink/40">({product.reviewsCount})</span>
          </div>
        </div>

        {/* Price and Cart Button */}
        <div className="pt-3 border-t border-ink/5 flex items-center justify-between gap-2 mt-auto">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-xl font-bold text-ink">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-ink/40 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-medium block">
              Free Express Delivery
            </span>
          </div>

          <button
            onClick={handleAddClick}
            className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${
              justAdded
                ? 'bg-emerald-700 text-white scale-95'
                : 'bg-pitch hover:bg-pitch-deep text-linen hover:shadow-md'
            }`}
          >
            {justAdded ? (
              <>
                <span>✓</span> Added
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}