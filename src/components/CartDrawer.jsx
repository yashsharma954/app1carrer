import { useState } from 'react'
import { BatIcon, BallIcon, PadIcon, GloveIcon, BagIcon } from './icons/ProductIcons'

const iconMap = {
  bat: BatIcon,
  ball: BallIcon,
  pad: PadIcon,
  glove: GloveIcon,
  bag: BagIcon,
}

const FREE_SHIPPING_THRESHOLD = 999

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemove,
  onClear,
}) {
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [promoError, setPromoError] = useState('')

  if (!isOpen) return null

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const discount = appliedPromo ? Math.round(subtotal * appliedPromo.percent) : 0
  const freeShipping = subtotal >= FREE_SHIPPING_THRESHOLD
  const shippingCost = freeShipping || subtotal === 0 ? 0 : 99
  const finalTotal = Math.max(0, subtotal - discount + shippingCost)
  const amountToFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal)
  const freeShippingPercent = Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))

  const handleApplyPromo = (e) => {
    e.preventDefault()
    setPromoError('')
    if (promoCode.trim().toUpperCase() === 'OFFSTUMP10' || promoCode.trim().toUpperCase() === 'CRICKET10') {
      setAppliedPromo({ code: promoCode.trim().toUpperCase(), percent: 0.1 })
    } else {
      setPromoError('Invalid coupon. Try "CRICKET10" for 10% off!')
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 flex w-full sm:pl-10">
        <div className="w-full sm:w-screen sm:max-w-md bg-pitch text-linen shadow-2xl flex flex-col border-l border-white/10 h-full">
          
          {/* Header */}
          <div className="px-4 sm:px-5 py-4 border-b border-white/10 flex items-center justify-between bg-pitch-deep shrink-0">
            <div className="flex items-center gap-2 min-w-0">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <h2 className="font-display text-lg sm:text-xl tracking-wide truncate">
                Your Match Kit Bag
              </h2>
              <span className="text-[11px] sm:text-xs bg-willow/20 text-willow px-2 py-0.5 rounded-full font-medium shrink-0">
                {items.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-white/10 text-linen/70 hover:text-linen transition-colors shrink-0"
              aria-label="Close cart"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-4 sm:px-5 py-3 bg-pitch-deep/70 border-b border-white/10 text-xs shrink-0">
            {freeShipping ? (
              <p className="text-emerald-400 font-medium flex items-center gap-1.5">
                <span>🏏</span> 
                <span>Congratulations! You've unlocked <strong>FREE Express Shipping</strong>!</span>
              </p>
            ) : (
              <div>
                <p className="text-linen/80 mb-2 leading-snug">
                  Add <strong className="text-willow">₹{amountToFreeShipping.toLocaleString('en-IN')}</strong> more for{' '}
                  <span className="underline decoration-willow">FREE Express Delivery</span>!
                </p>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-willow h-full transition-all duration-500 rounded-full"
                    style={{ width: `${freeShippingPercent}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 sm:px-5 py-4 space-y-3 sm:space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-4 py-8 text-linen/60">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-3xl">
                  🏏
                </div>
                <h3 className="font-display text-base sm:text-lg text-linen mb-1">Your kit bag is empty</h3>
                <p className="text-xs text-linen/60 max-w-[260px] mb-6 leading-relaxed">
                  Add hand-selected bats, match balls, or pro pads to get geared up for the pitch.
                </p>
                <button
                  onClick={onClose}
                  className="bg-ball hover:bg-ball-dark text-linen text-sm font-medium px-6 py-2.5 rounded-full transition-colors shadow-lg"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map((item) => {
                const Icon = iconMap[item.icon] || BatIcon
                return (
                  <div
                    key={item.id}
                    className="flex gap-3 sm:gap-4 p-3 sm:p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-[#FAF7F0] border border-white/10 shrink-0 relative overflow-hidden flex items-center justify-center">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover object-center"
                        />
                      ) : (
                        <Icon className="w-4/5 h-4/5 drop-shadow-md" />
                      )}
                    </div>

                    <div className="flex-1 min-w-0 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-sm text-linen leading-snug line-clamp-2">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => onRemove(item.id)}
                          className="text-linen/40 hover:text-ball transition-colors p-1 -mt-0.5 shrink-0"
                          title="Remove item"
                        >
                          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          </svg>
                        </button>
                      </div>

                      <p className="text-[11px] text-willow font-medium mt-0.5 mb-2">
                        {item.badge || item.category}
                      </p>

                      <div className="flex items-center justify-between mt-auto gap-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center border border-white/20 rounded-lg overflow-hidden bg-pitch-deep">
                          <button
                            onClick={() => onUpdateQty(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 text-linen/70 hover:text-linen text-sm font-semibold"
                          >
                            −
                          </button>
                          <span className="w-7 text-center text-xs font-medium text-linen">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 text-linen/70 hover:text-linen text-sm font-semibold"
                          >
                            +
                          </button>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-sm font-semibold text-linen">
                            ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>

          {/* Footer & Checkout */}
          {items.length > 0 && (
            <div className="px-4 sm:px-5 py-4 border-t border-white/10 bg-pitch-deep space-y-3 shrink-0">
              {/* Promo code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Coupon (try CRICKET10)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 min-w-0 bg-white/5 border border-white/15 rounded-lg px-3 py-2 text-xs text-linen placeholder:text-linen/40 focus:outline-none focus:border-willow"
                />
                <button
                  type="submit"
                  className="bg-white/10 hover:bg-white/20 text-linen text-xs px-4 py-2 rounded-lg font-medium transition-colors shrink-0"
                >
                  Apply
                </button>
              </form>

              {appliedPromo && (
                <div className="text-xs flex items-center justify-between text-emerald-400 bg-emerald-950/40 border border-emerald-800/50 px-2.5 py-1.5 rounded-lg gap-2">
                  <span className="truncate">
                    🎉 Coupon applied: <strong>{appliedPromo.code}</strong> (10% OFF)
                  </span>
                  <button 
                    onClick={() => setAppliedPromo(null)} 
                    className="text-linen/50 hover:text-linen shrink-0"
                  >
                    ✕
                  </button>
                </div>
              )}
              {promoError && (
                <p className="text-[11px] text-rose-400">{promoError}</p>
              )}

              {/* Price calculations */}
              <div className="space-y-1.5 text-xs text-linen/70 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-linen font-medium">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount (10%)</span>
                    <span>-₹{discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>
                    {shippingCost === 0 ? (
                      <strong className="text-emerald-400">FREE</strong>
                    ) : (
                      `₹${shippingCost}`
                    )}
                  </span>
                </div>
                <div className="border-t border-white/10 pt-2.5 flex justify-between items-end text-base font-semibold text-linen">
                  <span>Total Amount</span>
                  <span className="font-display text-lg sm:text-xl text-willow">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() =>
                  alert(
                    `Order placed successfully! Total: ₹${finalTotal.toLocaleString('en-IN')}. Thank you for gearing up with Off Stump Supply!`
                  )
                }
                className="w-full bg-ball hover:bg-ball-dark text-linen py-3.5 rounded-xl font-medium text-sm flex items-center justify-center gap-2 shadow-xl hover:shadow-ball/30 transition-all duration-200 active:scale-[0.98]"
              >
                <span>Proceed to Checkout</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[10px] sm:text-[11px] text-linen/40 pt-1">
                <span>🔒 256-Bit SSL</span>
                <span className="hidden xs:inline">•</span>
                <span>🏏 Genuine Willow</span>
                <span className="hidden xs:inline">•</span>
                <span>📦 Inspected Transit</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}