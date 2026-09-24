import { useState } from 'react'
import { BatIcon, BallIcon, PadIcon, GloveIcon, BagIcon } from './icons/ProductIcons'

const iconMap = {
  bat: BatIcon,
  ball: BallIcon,
  pad: PadIcon,
  glove: GloveIcon,
  bag: BagIcon,
}

export default function QuickViewModal({ product, onClose, onAdd }) {
  const [qty, setQty] = useState(1)
  const [imgError, setImgError] = useState(false)

  if (!product) return null

  const Icon = iconMap[product.icon] || BatIcon
  const savings = product.originalPrice ? product.originalPrice - product.price : 0
  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      onAdd(product)
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="flex min-h-full items-end sm:items-center justify-center p-0 sm:p-4 text-center">
        <div className="relative transform overflow-hidden rounded-t-2xl sm:rounded-2xl bg-linen text-left shadow-2xl transition-all w-full max-w-lg sm:max-w-2xl max-h-[92vh] sm:max-h-[90vh] overflow-y-auto border border-ink/10">
          
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2 rounded-full bg-pitch/10 hover:bg-pitch/20 text-ink transition-colors"
            aria-label="Close modal"
          >
            <svg width="18" height="18" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="grid md:grid-cols-2">
            {/* Left: Product Visual */}
            <div className="bg-gradient-to-b from-[#FAF7F0] to-[#EAE4D7] p-4 sm:p-6 flex flex-col items-center justify-center relative overflow-hidden min-h-[260px] sm:min-h-[320px] md:min-h-[340px]">
              {product.tag && (
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-ball text-linen text-[10px] sm:text-xs font-semibold px-2.5 py-1 sm:px-3 rounded-full shadow-md tracking-wide">
                  {product.tag}
                </span>
              )}

              <div className="w-full h-52 sm:h-64 md:h-72 relative flex items-center justify-center rounded-xl overflow-hidden shadow-sm">
                {product.image && !imgError ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 flex items-center justify-center">
                    <Icon className="w-full h-full drop-shadow-[0_16px_24px_rgba(0,0,0,0.4)]" />
                  </div>
                )}
              </div>

              <div className="mt-2.5 sm:mt-3 text-center px-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs text-emerald-800 font-semibold bg-emerald-100/80 border border-emerald-300 px-2.5 py-1 sm:px-3 rounded-full">
                  <span>✓</span> Match Ready • Inspected by Active Cricketers
                </span>
              </div>
            </div>

            {/* Right: Specs & Actions */}
            <div className="p-4 sm:p-6 md:p-8 flex flex-col justify-between bg-linen">
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-ball mb-1">
                  {product.category}
                </p>
                <h3 className="font-display text-xl sm:text-2xl text-ink font-bold leading-tight mb-2 pr-8">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 flex-wrap">
                  <div className="flex text-amber-500 text-xs sm:text-sm">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-xs font-semibold text-ink/80">
                    {product.rating || 4.9}
                  </span>
                  <span className="text-[11px] sm:text-xs text-ink/50">
                    ({product.reviewsCount || 120} verified)
                  </span>
                </div>

                {/* Price block */}
                <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="font-display text-2xl sm:text-3xl font-bold text-ink">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm line-through text-ink/40">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        {discountPercent}% OFF (Save ₹{savings.toLocaleString('en-IN')})
                      </span>
                    </>
                  )}
                </div>

                <p className="text-xs text-ink/70 leading-relaxed mb-4 sm:mb-5">
                  {product.description}
                </p>

                {/* Specifications Grid */}
                <div className="border-t border-b border-ink/10 py-3 mb-4 sm:mb-5 grid grid-cols-2 gap-y-2.5 gap-x-3 text-xs">
                  <div>
                    <span className="text-ink/50 block text-[10px] sm:text-xs">Grade / Spec</span>
                    <span className="font-semibold text-ink text-[11px] sm:text-xs">
                      {product.badge || 'Hand Selected'}
                    </span>
                  </div>
                  <div>
                    <span className="text-ink/50 block text-[10px] sm:text-xs">Weight / Balance</span>
                    <span className="font-semibold text-ink text-[11px] sm:text-xs">
                      {product.weight || 'Standard Match Weight'}
                    </span>
                  </div>
                  <div>
                    <span className="text-ink/50 block text-[10px] sm:text-xs">Grains / Seam</span>
                    <span className="font-semibold text-ink text-[11px] sm:text-xs">
                      {product.grains || 'Club Specification'}
                    </span>
                  </div>
                  <div>
                    <span className="text-ink/50 block text-[10px] sm:text-xs">Knocking Status</span>
                    <span className="font-semibold text-emerald-700 text-[11px] sm:text-xs">
                      10,000 Machine Knocks
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <span className="text-xs font-medium text-ink/70">Quantity:</span>
                  <div className="flex items-center border border-ink/20 rounded-lg overflow-hidden bg-white">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="w-9 h-9 flex items-center justify-center hover:bg-ink/5 text-sm font-bold"
                    >
                      −
                    </button>
                    <span className="w-8 text-sm font-semibold text-center">{qty}</span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      className="w-9 h-9 flex items-center justify-center hover:bg-ink/5 text-sm font-bold"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-[11px] sm:text-xs text-emerald-700 font-medium">
                    ● In stock & ready
                  </span>
                </div>

                <button
                  onClick={handleAdd}
                  className="w-full bg-pitch hover:bg-pitch-deep text-linen py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
                  </svg>
                  <span>
                    Add to Kit Bag — ₹{(product.price * qty).toLocaleString('en-IN')}
                  </span>
                </button>

                <p className="text-[10px] sm:text-[11px] text-center text-ink/50 mt-2.5 sm:mt-3">
                  🛡️ Free Transit Crate Insurance • 7-Day Hassle-Free Returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}