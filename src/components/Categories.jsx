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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-ball block mb-2">
            Curated Departments
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-ink font-bold">
            Shop By Cricket Discipline
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-ink/60 max-w-md mt-2 md:mt-0">
          Everything you need for Saturday league matches and net training, built to international match standards.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(({ id, name, subtitle, count, image, accent, border }) => {
          const isSelected = activeCategory === id
          return (
            <div
              key={id}
              onClick={() => handleCategoryClick(id)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 p-6 flex flex-col justify-between border bg-pitch text-linen shadow-md hover:shadow-2xl hover:-translate-y-1.5 min-h-[300px] ${
                isSelected
                  ? 'ring-2 ring-willow border-willow'
                  : 'border-white/10 ' + border
              }`}
            >
              {/* Background Real Image with Gradient Overlay */}
              <img
                src={image}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-pitch-deep via-pitch/70 to-pitch/30`} />

              {/* Card Top Pill */}
              <div className="relative z-10 flex items-center justify-between mb-8">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full bg-pitch-deep/80 text-willow-light border border-white/15 backdrop-blur-sm">
                  {count}
                </span>
                <span className="text-xs font-semibold text-linen/70 group-hover:text-willow transition-colors bg-pitch-deep/60 px-2 py-0.5 rounded-md backdrop-blur-sm">
                  View →
                </span>
              </div>

              {/* Card Bottom Meta */}
              <div className="relative z-10 mt-auto pt-4 border-t border-white/15">
                <h3 className="font-display text-xl font-bold text-linen group-hover:text-willow transition-colors drop-shadow-md">
                  {name}
                </h3>
                <p className="text-xs text-linen/80 mt-1 drop-shadow-sm">{subtitle}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}