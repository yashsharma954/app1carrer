const reviews = [
  {
    id: 1,
    name: 'Rohan Verma',
    role: 'Division 1 Club Captain',
    city: 'Delhi',
    rating: 5,
    product: 'English Willow Bat — Grade 1 Pro',
    quote: 'The ping off the middle on this Grade 1 cleft is extraordinary. The bat pickup feels at least 40 grams lighter than the scale weight because of the balance. Scored a century in my second league match with it.',
    badge: 'Verified Player',
  },
  {
    id: 2,
    name: 'Tanmay Kulkarni',
    role: 'Opening Seam Bowler',
    city: 'Mumbai',
    rating: 5,
    product: '4-Piece Leather Match Ball (Red)',
    quote: 'Most club balls lose their lacquer and seam shape within 15 overs. These 4-piece balls held prominent seam grip through 35 overs of hard cricket. The swing was consistent both ways.',
    badge: 'Verified Match Ball Buyer',
  },
  {
    id: 3,
    name: 'Arjun Nambiar',
    role: 'Academy Head Coach',
    city: 'Bangalore',
    rating: 5,
    product: 'Batting Pads & Shark-Tooth Gloves',
    quote: 'Ordered 6 sets of protective gear for our senior tournament squad. The shock absorption against 135 km/h bowling is spot on, and the lightweight construction lets the batters move effortlessly.',
    badge: 'Academy Partner',
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
        <div>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-ball block mb-1.5 sm:mb-2">
            Match Day Feedback
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink font-bold leading-tight">
            Rated 4.9/5 By Active Cricketers
          </h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl border border-ink/10 shadow-sm self-start">
          <div className="flex text-amber-500 text-sm">
            {'★'.repeat(5)}
          </div>
          <span className="text-xs font-bold text-ink">4.9 / 5.0</span>
          <span className="text-[11px] sm:text-xs text-ink/50 hidden xs:inline">
            (850+ Verified Reviews)
          </span>
        </div>
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 border border-ink/10 shadow-sm flex flex-col justify-between hover:shadow-lg transition-all h-full"
          >
            <div>
              {/* Top rating & verified tag */}
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <div className="flex text-amber-500 text-sm">
                  {'★'.repeat(rev.rating)}
                </div>
                <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 whitespace-nowrap">
                  ✓ {rev.badge}
                </span>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed italic mb-5 sm:mb-6">
                "{rev.quote}"
              </p>
            </div>

            {/* Author info */}
            <div className="pt-3 sm:pt-4 border-t border-ink/5 mt-auto">
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <h4 className="font-display text-sm font-bold text-ink truncate">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-ink/60 truncate">
                    {rev.role} • {rev.city}
                  </p>
                </div>
                <span className="text-lg sm:text-xl shrink-0">🏏</span>
              </div>
              <p className="text-[10px] text-willow font-semibold mt-2 truncate">
                Item: {rev.product}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}