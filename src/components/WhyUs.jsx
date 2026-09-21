const pillars = [
  {
    icon: '🪵',
    title: 'Hand-Selected English Willow',
    subtitle: 'Straight 8–12 Grains',
    body: 'We hand-pick raw clefts based on grain structure, wood density, and ping resonance. Less than 15% of clefts meet our standard for balance and pickup.',
  },
  {
    icon: '🔨',
    title: '10,000 Free Machine Knocks',
    subtitle: 'Match-Ready On Day One',
    body: 'Every bat undergoes linseed oil infusion and 10,000 automated pneumatic mallet cycles to compress willow fibres, preventing premature surface cracks.',
  },
  {
    icon: '🎯',
    title: '135+ km/h Net Tested',
    subtitle: 'Tested Against Real Pace',
    body: 'Our protective pads, gloves, and helmets are tested against 135+ km/h seam deliveries so you walk onto the crease with complete confidence.',
  },
  {
    icon: '📦',
    title: 'Armour-Crate Transit Box',
    subtitle: 'Zero Transit Dents',
    body: 'Bats travel in custom edge-reinforced corner guards. Balls arrive individually vacuum-sealed to preserve their factory sheen and seam moisture.',
  },
]

export default function WhyUs() {
  return (
    <section id="craftsmanship" className="bg-linen-dim/60 border-t border-b border-ink/5 py-18 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-ball block mb-2">
            The Master Craftsman Standard
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-ink font-bold leading-tight mb-4">
            Why Club Cricketers Trust Off Stump Supply
          </h2>
          <p className="text-sm text-ink/70 leading-relaxed">
            We don't sell stock straight out of shipping containers. Every bat, ball, and pad is prepped, tested, and certified before leaving our workshop.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pt) => (
            <div
              key={pt.title}
              className="bg-white rounded-2xl p-7 border border-ink/10 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-pitch/5 border border-pitch/10 flex items-center justify-center text-2xl mb-5 shadow-inner">
                  {pt.icon}
                </div>
                <span className="text-[11px] font-bold text-ball uppercase tracking-wider block mb-1">
                  {pt.subtitle}
                </span>
                <h3 className="font-display text-lg font-bold text-ink mb-3 leading-snug">
                  {pt.title}
                </h3>
                <p className="text-xs text-ink/70 leading-relaxed">
                  {pt.body}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-ink/5 flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700">
                <span>✓</span> Guaranteed Standard
              </div>
            </div>
          ))}
        </div>

        {/* Process Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-pitch to-pitch-deep text-linen p-8 md:p-10 shadow-xl border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-willow block mb-1">
              Complimentary Bat Preparation
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-linen mb-2">
              Free Knocking-in, Edging & Anti-Scuff Sheet
            </h3>
            <p className="text-xs sm:text-sm text-linen/75 leading-relaxed">
              Purchasing any English Willow bat includes our complete 48-hour workshop treatment: toe guard installation, raw linseed oiling, and machine edge hardening at no extra cost.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a
              href="#products"
              className="bg-ball hover:bg-ball-dark text-linen px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide transition-colors shadow-lg text-center"
            >
              Browse English Willow
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 hover:border-willow text-linen/90 hover:text-willow px-7 py-3.5 rounded-full text-xs font-semibold tracking-wide transition-colors text-center"
            >
              Knocking Inquiries
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}