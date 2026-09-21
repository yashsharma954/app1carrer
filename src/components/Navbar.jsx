import { useState } from 'react'

const navCategories = [
  { label: 'All Equipment', filter: 'All' },
  { label: 'English Willow Bats', filter: 'Bats' },
  { label: 'Match Balls', filter: 'Balls' },
  { label: 'Protective Gear', filter: 'Protective Gear' },
  { label: 'Kit Bags', filter: 'Kit Bags' },
]

export default function Navbar({ cartCount, onOpenCart, onSelectCategory, activeCategory }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <header className="sticky top-0 z-40 w-full shadow-lg">
      {/* Top Cricket Announcement Bar */}
      <div className="bg-ball text-linen text-xs py-2 px-4 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
            <span className="inline-block animate-pulse">⚡</span>
            <span className="font-semibold uppercase text-[11px] tracking-wider">SEASON 2026 DROP:</span>
            <span className="opacity-90">Free Express Delivery on orders over ₹999</span>
            <span className="hidden md:inline opacity-60">•</span>
            <span className="hidden md:inline opacity-90">Free 10,000 Machine Knocks on all English Willow Bats</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[11px] shrink-0">
            <span className="text-linen/80">🏆 Club Player Tested</span>
            <span className="text-linen/50">|</span>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="text-willow-light hover:underline flex items-center gap-1 font-medium"
            >
              <span>💬</span> Bat Specialist Desk
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <div className="bg-pitch/95 backdrop-blur-md text-linen border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-willow to-willow-light flex items-center justify-center text-pitch font-black text-xl shadow-md group-hover:scale-105 transition-transform">
              🏏
            </div>
            <div>
              <div className="font-display text-2xl font-bold tracking-tight text-linen leading-none flex items-center gap-1.5">
                OFF STUMP <span className="text-willow">SUPPLY</span>
              </div>
              <span className="text-[10px] text-willow/80 uppercase tracking-widest font-semibold block mt-0.5">
                Authentic Cricket Workshop
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
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
                  className={`relative py-1 transition-colors hover:text-willow ${
                    isActive ? 'text-willow font-semibold' : 'text-linen/85'
                  }`}
                >
                  {cat.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-willow rounded-full" />
                  )}
                </button>
              )
            })}
            <a
              href="#craftsmanship"
              className="text-linen/75 hover:text-willow transition-colors"
            >
              Knocking Lab
            </a>
            <a
              href="#testimonials"
              className="text-linen/75 hover:text-willow transition-colors"
            >
              Reviews
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3.5">
            {/* Search Toggle */}
            <div className="relative">
              {searchOpen ? (
                <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1.5 transition-all">
                  <input
                    type="text"
                    placeholder="Search bats, balls..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent text-xs text-linen placeholder:text-linen/50 focus:outline-none w-32 sm:w-44"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-linen/60 hover:text-linen text-xs ml-1"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  aria-label="Search equipment"
                  className="p-2.5 rounded-full hover:bg-white/10 text-linen/80 hover:text-linen transition-colors"
                >
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
              className="relative flex items-center gap-2.5 bg-willow/10 hover:bg-willow/20 border border-willow/30 text-linen px-4 py-2.5 rounded-full transition-all duration-200 group"
            >
              <div className="relative">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-willow">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2.5 bg-ball text-linen text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-pitch animate-bounce">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold hidden sm:inline text-willow-light group-hover:text-linen">
                Kit Bag
              </span>
              {cartCount > 0 && (
                <span className="text-xs font-bold text-willow">({cartCount})</span>
              )}
            </button>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2.5 rounded-lg text-linen/80 hover:text-linen hover:bg-white/10"
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
        <div className="lg:hidden bg-pitch-deep border-b border-white/10 px-5 py-5 space-y-3 text-sm">
          <div className="text-xs font-semibold uppercase tracking-wider text-willow mb-2">Categories</div>
          {navCategories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => {
                onSelectCategory(cat.filter)
                setMobileMenuOpen(false)
                const el = document.getElementById('products')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              className="block w-full text-left py-2 text-linen/80 hover:text-willow font-medium"
            >
              {cat.label}
            </button>
          ))}
          <div className="border-t border-white/10 pt-3 space-y-2">
            <a
              href="#craftsmanship"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-linen/70 hover:text-willow"
            >
              Knocking Lab & Oiling
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-linen/70 hover:text-willow"
            >
              Player Reviews
            </a>
            <a
              href="https://wa.me/919876543210"
              className="block py-2 text-willow font-semibold flex items-center gap-1.5"
            >
              <span>💬</span> WhatsApp Equipment Specialist
            </a>
          </div>
        </div>
      )}
    </header>
  )
}