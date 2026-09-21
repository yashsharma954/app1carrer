import { useState } from 'react'

export default function Footer({ onSelectCategory }) {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (newsletterEmail.trim()) {
      setSubscribed(true)
      setNewsletterEmail('')
    }
  }

  return (
    <footer className="bg-pitch-deep text-linen border-t border-white/10">
      {/* 1st XI VIP Newsletter Banner */}
      <div className="border-b border-white/10 bg-pitch/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-willow block mb-1">
              Join The 1st XI Club
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-linen mb-2">
              Get 10% Off Your First English Willow Bat
            </h3>
            <p className="text-xs sm:text-sm text-linen/70">
              Receive limited cleft drop notifications, bat preparation masterclasses, and priority access to new stock.
            </p>
          </div>

          <div className="w-full max-w-md">
            {subscribed ? (
              <div className="bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 px-5 py-3.5 rounded-xl text-xs font-semibold flex items-center gap-2">
                <span>🏏</span> Welcome to the 1st XI Club! Check your inbox for your 10% coupon code.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-xs text-linen placeholder:text-linen/40 focus:outline-none focus:border-willow"
                />
                <button
                  type="submit"
                  className="bg-ball hover:bg-ball-dark text-linen text-xs font-semibold px-6 py-3 rounded-xl transition-colors shrink-0 shadow-lg"
                >
                  Join Club
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs">
        {/* Col 1: Brand & Identity */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-lg bg-willow flex items-center justify-center text-pitch text-lg font-black">
              🏏
            </div>
            <span className="font-display text-xl font-bold text-linen">
              OFF STUMP <span className="text-willow">SUPPLY</span>
            </span>
          </div>
          <p className="text-linen/65 leading-relaxed mb-6">
            Hand-curated cricket equipment inspected by active club players. From raw English willow clefts to match-grade steerhide leather balls.
          </p>
          <div className="space-y-1.5 text-linen/75">
            <p className="flex items-center gap-2">
              <span>📍</span> Cricket Workshop, Meerut & Bangalore
            </p>
            <p className="flex items-center gap-2">
              <span>⚡</span> Fast 24-Hour Dispatch Across India
            </p>
          </div>
        </div>

        {/* Col 2: Equipment Categories */}
        <div>
          <h4 className="font-display text-sm font-bold text-willow uppercase tracking-wider mb-4">
            Equipment Catalog
          </h4>
          <ul className="space-y-2.5 text-linen/70">
            <li>
              <button
                onClick={() => onSelectCategory('Bats')}
                className="hover:text-willow transition-colors text-left"
              >
                Grade 1 English Willow Bats
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectCategory('Bats')}
                className="hover:text-willow transition-colors text-left"
              >
                Kashmir Willow Practice Bats
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectCategory('Balls')}
                className="hover:text-willow transition-colors text-left"
              >
                4-Piece Red Leather Match Balls
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectCategory('Protective Gear')}
                className="hover:text-willow transition-colors text-left"
              >
                High-Density Batting Pads
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectCategory('Protective Gear')}
                className="hover:text-willow transition-colors text-left"
              >
                Split-Finger Batting Gloves
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectCategory('Kit Bags')}
                className="hover:text-willow transition-colors text-left"
              >
                Heavy Duty Wheeled Kit Bags
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Workshop Services */}
        <div>
          <h4 className="font-display text-sm font-bold text-willow uppercase tracking-wider mb-4">
            Bat Workshop & Care
          </h4>
          <ul className="space-y-2.5 text-linen/70">
            <li>
              <a href="#craftsmanship" className="hover:text-willow transition-colors">
                10,000 Machine Knocking Service
              </a>
            </li>
            <li>
              <a href="#craftsmanship" className="hover:text-willow transition-colors">
                Raw Linseed Oiling & Sealing
              </a>
            </li>
            <li>
              <a href="#craftsmanship" className="hover:text-willow transition-colors">
                Toe Guard & Anti-Scuff Installation
              </a>
            </li>
            <li>
              <a href="#craftsmanship" className="hover:text-willow transition-colors">
                Bat Weight & Balance Customization
              </a>
            </li>
            <li>
              <a href="#craftsmanship" className="hover:text-willow transition-colors">
                Cricket Bat Sizing & Profile Guide
              </a>
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Support */}
        <div>
          <h4 className="font-display text-sm font-bold text-willow uppercase tracking-wider mb-4">
            Cricketer Support Desk
          </h4>
          <p className="text-linen/65 mb-4 leading-relaxed">
            Need advice on bat grain count, edge thickness, or weight pickup? Speak directly to our master batmakers.
          </p>
          <div className="space-y-2.5">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-linen px-4 py-2 rounded-xl font-medium transition-colors"
            >
              <span>💬</span> WhatsApp: +91 98765 43210
            </a>
            <p className="text-linen/50 text-[11px]">
              Available Monday – Saturday, 9 AM – 8 PM IST
            </p>
          </div>
        </div>
      </div>

      {/* Trust & Payment Badges Strip */}
      <div className="border-t border-white/10 py-6 px-4 sm:px-6 lg:px-8 bg-pitch">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-linen/50">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1 text-linen/75">
              <span>🔒</span> 256-Bit SSL Encrypted
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-linen/75">
              <span>🏏</span> 100% Genuine English Willow
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-linen/75">
              <span>🚚</span> Express All-India Courier
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-linen/75">
              <span>🔄</span> 7-Day Replacement Guarantee
            </span>
          </div>

          <div className="flex items-center gap-2 text-linen/70 font-semibold">
            <span>Payment Modes:</span>
            <span className="bg-white/10 px-2 py-1 rounded">UPI</span>
            <span className="bg-white/10 px-2 py-1 rounded">GPay</span>
            <span className="bg-white/10 px-2 py-1 rounded">PhonePe</span>
            <span className="bg-white/10 px-2 py-1 rounded">Visa / MC</span>
            <span className="bg-white/10 px-2 py-1 rounded">COD</span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 py-4 px-4 text-center text-[11px] text-linen/40 bg-pitch-deep">
        © {new Date().getFullYear()} Off Stump Supply Ltd. Crafted for cricketers who demand the middle of the bat.
      </div>
    </footer>
  )
}
