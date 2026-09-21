import SeamDivider from './SeamDivider'

export default function Hero({ onShopClick }) {
  return (
    <section id="top" className="relative bg-gradient-to-b from-pitch-deep via-pitch to-pitch-deep text-linen overflow-hidden">
      {/* Stadium Floodlight Radial Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-willow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-ball/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-willow/30 text-willow text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-ball animate-pulse" />
              <span>Authentic Cricket Equipment • 2026 Collection</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
              Gear tested on a <span className="text-willow underline decoration-ball decoration-wavy decoration-2">real pitch</span>, not a warehouse shelf.
            </h1>

            {/* Subtitle */}
            <p className="text-linen/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Every English willow bat, leather match ball, and pro guard in our shop was picked out by active cricketers. We inspect every cleft for straight grains, sweet spot balance, and optimum rebound ping before it reaches your door.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <a
                href="#products"
                onClick={onShopClick}
                className="bg-ball hover:bg-ball-dark text-linen px-8 py-4 rounded-full font-semibold text-sm transition-all duration-200 shadow-xl hover:shadow-ball/40 flex items-center gap-2 group hover:-translate-y-0.5"
              >
                <span>Shop Match Collection</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="group-hover:translate-x-1 transition-transform"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#craftsmanship"
                className="border border-white/20 hover:border-willow text-linen/90 hover:text-willow px-7 py-4 rounded-full font-medium text-sm transition-all hover:bg-white/5 flex items-center gap-2"
              >
                <span>The Knocking Process</span>
                <span className="text-xs text-willow">→</span>
              </a>
            </div>

            {/* Live Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs">
              <div>
                <p className="font-display text-xl font-bold text-willow">100%</p>
                <p className="text-linen/60 text-[11px] mt-0.5">Hand-Selected English Willow</p>
              </div>
              <div>
                <p className="font-display text-xl font-bold text-linen">10,000+</p>
                <p className="text-linen/60 text-[11px] mt-0.5">Free Machine Knocks</p>
              </div>
              <div>
                <p className="font-display text-xl font-bold text-amber-400">4.9 / 5.0</p>
                <p className="text-linen/60 text-[11px] mt-0.5">850+ Club Cricketers</p>
              </div>
            </div>
          </div>

          {/* Right Hero Real Photography Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Real Cricket Equipment Photo Stage */}
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
              {/* Real Match Ground Photograph */}
              <img
                src="/products/hero.jpg"
                alt="Lord's Cricket Ground with English Willow Bat, Wickets and 4-Piece Match Ball"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-pitch-deep/90 via-pitch-deep/20 to-transparent" />

              {/* Floating Match-Ready Pill */}
              <div className="absolute top-5 left-5 z-20 bg-pitch-deep/85 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <p className="text-[11px] font-bold text-linen leading-none">Match-Ready Ping</p>
                  <p className="text-[10px] text-willow mt-0.5">Oiled & Machine Knocks Free</p>
                </div>
              </div>

              {/* Floating Shipping Counter Badge */}
              <div className="absolute bottom-5 left-5 z-20 bg-linen/95 backdrop-blur text-ink px-5 py-3 rounded-2xl shadow-2xl border border-white/20">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">🏏</span>
                  <div>
                    <p className="font-display text-base font-extrabold leading-none text-pitch">12,000+ Pieces</p>
                    <p className="text-[10px] text-ink/70 font-semibold mt-0.5">Shipped this cricket season</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Cricket Ball Red Seam Divider */}
      <SeamDivider className="w-full h-3.5 text-willow/40" />
    </section>
  )
}