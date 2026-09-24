const categories = [
  {
    id: 'Bats',
    name: 'English & Kashmir Bats',
    subtitle: 'Grade 1 & Club Editions',
    count: '6 Models',
    image: '/products/bat-1.jpg',
    accent: 'from-amber-900/40 to-pitch',
    border: 'hover:border-willow/50',
  },
  {
    id: 'Balls',
    name: 'Leather Match Balls',
    subtitle: '4-Piece Alum-Tanned Red',
    count: 'Match Spec',
    image: '/products/ball.jpg',
    accent: 'from-rose-950/40 to-pitch',
    border: 'hover:border-ball/50',
  },
  {
    id: 'Protective Gear',
    name: 'Pads & Batting Gloves',
    subtitle: 'High-Density Impact Shield',
    count: 'Pro Protection',
    image: '/products/pads.jpg',
    accent: 'from-emerald-950/40 to-pitch',
    border: 'hover:border-emerald-600/50',
  },
  {
    id: 'Kit Bags',
    name: 'Heavy-Duty Kit Bags',
    subtitle: 'Wheeled & Duffle Pro Bags',
    count: '110L Capacity',
    image: '/products/bag.jpg',
    accent: 'from-slate-900/40 to-pitch',
    border: 'hover:border-willow/50',
  },
]

export default function Categories({ onSelectCategory, activeCategory }) {
  const handleCategoryClick = (catId) => {
    onSelectCategory(catId)
    const el = document.getElementById('products')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 md:mb-12">
        <div>
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-ball block mb-1.5 sm:mb-2">
            Curated Departments
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-ink font-bold leading-tight">
            Shop By Cricket Discipline
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-ink/60 max-w-md leading-relaxed">
          Everything you need for Saturday league matches and net training, built to international match standards.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {categories.map(({ id, name, subtitle, count, image, border }) => {
          const isSelected = activeCategory === id
          return (
            <div
              key={id}
              onClick={() => handleCategoryClick(id)}
              className={`group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 p-3.5 sm:p-5 md:p-6 flex flex-col justify-between border bg-pitch text-linen shadow-md hover:shadow-2xl hover:-translate-y-1 min-h-[180px] sm:min-h-[240px] md:min-h-[280px] ${
                isSelected
                  ? 'ring-2 ring-willow border-willow'
                  : 'border-white/10 ' + border
              }`}
            >
              {/* Background Image */}
              <img
                src={image}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-pitch-deep via-pitch/70 to-pitch/30" />

              {/* Top Pill */}
              <div className="relative z-10 flex items-center justify-between gap-2 mb-4 sm:mb-6">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-pitch-deep/80 text-willow-light border border-white/15 backdrop-blur-sm whitespace-nowrap">
                  {count}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-linen/70 group-hover:text-willow transition-colors bg-pitch-deep/60 px-1.5 sm:px-2 py-0.5 rounded-md backdrop-blur-sm whitespace-nowrap">
                  View →
                </span>
              </div>

              {/* Bottom Meta */}
              <div className="relative z-10 mt-auto pt-2.5 sm:pt-3 md:pt-4 border-t border-white/15">
                <h3 className="font-display text-sm sm:text-base md:text-xl font-bold text-linen group-hover:text-willow transition-colors drop-shadow-md leading-snug line-clamp-2">
                  {name}
                </h3>
                <p className="text-[10px] sm:text-[11px] md:text-xs text-linen/80 mt-0.5 sm:mt-1 drop-shadow-sm line-clamp-1">
                  {subtitle}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}