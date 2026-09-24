import { useState } from 'react'

const navCategories = [
  { label: 'All Equipment', filter: 'All' },
  { label: 'English Willow Bats', filter: 'Bats' },
  { label: 'Match Balls', filter: 'Balls' },
  { label: 'Protective Gear', filter: 'Protective Gear' },
  { label: 'Kit Bags', filter: 'Kit Bags' },
]

// Put your logo gif/png/webp inside /public (e.g. public/logo-bat-swing.gif)
const LOGO_SRC = '/logo-bat-swing.gif'

export default function Navbar({ cartCount, onOpenCart, onSelectCategory, activeCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full max-w-full overflow-x-hidden shadow-lg">
      {/* Top Cricket Announcement Bar */}
      <div className="bg-ball text-linen text-[11px] sm:text-xs py-2 px-3 sm:px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden whitespace-nowrap min-w-0">
            <span className="inline-block animate-pulse shrink-0">⚡</span>
            <span className="font-semibold uppercase tracking-wider shrink-0">
              SEASON 2026 DROP:
            </span>
            <span className="opacity-90 truncate">
              Free Express Delivery on orders over ₹999
            </span>
            <span className="hidden md:inline opacity-60 shrink-0">•</span>
            <span className="hidden md:inline opacity-90 shrink-0">
              Free 10,000 Machine Knocks on all English Willow Bats
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-3 lg:gap-4 text-[11px] shrink-0">
            <span className="text-linen/80 whitespace-nowrap">🏆 Club Player Tested</span>
            <span className="text-linen/50 hidden md:inline">|</span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="text-willow-light hover:underline flex items-center gap-1 font-medium whitespace-nowrap"
            >
              <span>💬</span> Bat Specialist
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="bg-pitch/95 backdrop-blur-md text-linen border-b border-white/10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 flex items-center justify-between h-16 sm:h-18 md:h-20 gap-2">
          
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-willow to-willow-light flex items-center justify-center overflow-hidden shadow-md ring-1 ring-white/10 group-hover:scale-105 transition-transform duration-300 shrink-0">
              {!logoError ? (
                <img
                  src={LOGO_SRC}
                  alt="Off Stump Supply logo"
                  className="w-full h-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span className="text-pitch font-black text-lg sm:text-xl">🏏</span>
              )}
            </div>
            <div className="min-w-0">
              <div className="font-display text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-linen leading-none flex items-center gap-1">
                <span className="truncate">OFF STUMP</span>
                <span className="text-willow shrink-0">SUPPLY</span>
              </div>
              <span className="text-[9px] sm:text-[10px] text-willow/80 uppercase tracking-widest font-semibold block mt-0.5 truncate">
                Authentic Cricket Workshop
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] font-semibold ml-4 min-w-0">
            {navCategories.map((cat) => {
              const isActive = activeCategory === cat.filter
              return (
                <button
                  key={cat.label}
                  onClick={() => {
                    onSelectCategory(cat.filter)
                    const el = document.getElementById('products')
                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className={`relative py-1 whitespace-nowrap transition-colors hover:text-willow ${
                    isActive ? 'text-willow' : 'text-linen/80'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-willow rounded-full" />
                  )}
                </button>
              )
            })}
            <a
              href="#craftsmanship"
              className="hidden xl:inline whitespace-nowrap text-linen/70 hover:text-willow transition-colors"
            >
              Knocking Lab
            </a>
            <a
              href="#testimonials"
              className="hidden xl:inline whitespace-nowrap text-linen/70 hover:text-willow transition-colors"
            >
              Reviews
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-2.5 sm:px-3 py-1.5 transition-all">
                  <input
                    type="text"
                    placeholder="Search bats, balls..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-linen placeholder:text-linen/50 focus:outline-none w-28 sm:w-36 md:w-44"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-linen/60 hover:text-linen text-xs ml-1 p-0.5"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search equipment"
                  className="p-2 sm:p-2.5 rounded-full hover:bg-white/10 text-linen/80 hover:text-linen transition-colors"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </button>
              )}
            </div>

            {/* Cart Button with Counter */}
            <button
              onClick={onOpenCart}
              aria-label="Open Cart"
              className="relative flex items-center gap-1.5 sm:gap-2.5 bg-willow/10 hover:bg-willow/20 border border-willow/30 text-linen px-2.5 sm:px-4 py-2 sm:py-2.5 rounded-full transition-all duration-200 group"
            >
              <div className="relative">
                <svg width="18" height="18" className="sm:w-5 sm:h-5 text-willow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-ball text-linen text-[10px] font-bold w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center ring-2 ring-pitch animate-bounce">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold hidden sm:inline text-willow-light group-hover:text-linen">
                Kit Bag
              </span>
              {cartCount > 0 && (
                <span className="text-xs font-bold text-willow hidden xs:inline">
                  ({cartCount})
                </span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 sm:p-2.5 rounded-lg text-linen/80 hover:text-linen hover:bg-white/10"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen((o) => !o)}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-pitch-deep border-b border-white/10 px-4 sm:px-5 py-4 sm:py-5 space-y-1 text-sm animate-in slide-in-from-top-2 duration-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-willow mb-3 px-1">
            Categories
          </div>
          
          {navCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => {
                onSelectCategory(cat.filter)
                setMobileMenuOpen(false)
                const el = document.getElementById('products')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`block w-full text-left px-3 py-2.5 rounded-lg font-medium transition-colors ${
                activeCategory === cat.filter
                  ? 'bg-willow/15 text-willow'
                  : 'text-linen/80 hover:bg-white/5 hover:text-willow'
              }`}
            >
              {cat.label}
            </button>
          ))}

          <div className="border-t border-white/10 mt-3 pt-3 space-y-1">
            <a
              href="#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-linen/70 hover:bg-white/5 hover:text-willow"
            >
              Knocking Lab & Oiling
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-linen/70 hover:bg-white/5 hover:text-willow"
            >
              Player Reviews
            </a>
            <a
              href="https://wa.me/919876543210"
              className="block px-3 py-2.5 rounded-lg text-willow font-semibold flex items-center gap-2 hover:bg-willow/10"
            >
              <span>💬</span> WhatsApp Equipment Specialist
            </a>
          </div>
        </div>
      )}
    </header>
  )
}