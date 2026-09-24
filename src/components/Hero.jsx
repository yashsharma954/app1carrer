// // import SeamDivider from './SeamDivider'

// // export default function Hero({ onShopClick }) {
// //   return (
// //     <section id="top" className="relative bg-gradient-to-b from-pitch-deep via-pitch to-pitch-deep text-linen overflow-hidden">
// //       {/* Stadium Floodlight Radial Glows */}
// //       <div className="absolute top-0 left-1/4 w-96 h-96 bg-willow/10 rounded-full blur-3xl pointer-events-none" />
// //       <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-ball/10 rounded-full blur-3xl pointer-events-none" />

// //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
// //         <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
// //           {/* Left Hero Content */}
// //           <div className="lg:col-span-7 max-w-2xl">
// //             {/* Top Badge */}
// //             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-willow/30 text-willow text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
// //               <span className="w-2 h-2 rounded-full bg-ball animate-pulse" />
// //               <span>Authentic Cricket Equipment • 2026 Collection</span>
// //             </div>

// //             {/* Main Headline */}
// //             <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight mb-5 sm:mb-6">
// //               Gear tested on a <span className="text-willow underline decoration-ball decoration-wavy decoration-2">real pitch</span>, not a warehouse shelf.
// //             </h1>

// //             {/* Subtitle */}
// //             <p className="text-linen/80 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
// //               Every English willow bat, leather match ball, and pro guard in our shop was picked out by active cricketers. We inspect every cleft for straight grains, sweet spot balance, and optimum rebound ping before it reaches your door.
// //             </p>

// //             {/* CTA Buttons */}
// //             <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
// //               <a
// //                 href="#products"
// //                 onClick={onShopClick}
// //                 className="bg-ball hover:bg-ball-dark text-linen px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 shadow-xl hover:shadow-ball/40 flex items-center gap-2 group hover:-translate-y-0.5"
// //               >
// //                 <span>Shop Match Collection</span>
// //                 <svg
// //                   width="18"
// //                   height="18"
// //                   viewBox="0 0 24 24"
// //                   fill="none"
// //                   stroke="currentColor"
// //                   strokeWidth="2.2"
// //                   className="group-hover:translate-x-1 transition-transform"
// //                 >
// //                   <path d="M5 12h14M12 5l7 7-7 7" />
// //                 </svg>
// //               </a>

// //               <a
// //                 href="#craftsmanship"
// //                 className="border border-white/20 hover:border-willow text-linen/90 hover:text-willow px-7 py-4 rounded-full font-medium text-sm transition-all hover:bg-white/5 flex items-center gap-2"
// //               >
// //                 <span>The Knocking Process</span>
// //                 <span className="text-xs text-willow">→</span>
// //               </a>
// //             </div>

// //             {/* Live Trust Badges */}
// //             <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs">
// //               <div>
// //                 <p className="font-display text-xl font-bold text-willow">100%</p>
// //                 <p className="text-linen/60 text-[11px] mt-0.5">Hand-Selected English Willow</p>
// //               </div>
// //               <div>
// //                 <p className="font-display text-xl font-bold text-linen">10,000+</p>
// //                 <p className="text-linen/60 text-[11px] mt-0.5">Free Machine Knocks</p>
// //               </div>
// //               <div>
// //                 <p className="font-display text-xl font-bold text-amber-400">4.9 / 5.0</p>
// //                 <p className="text-linen/60 text-[11px] mt-0.5">850+ Club Cricketers</p>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Right Hero Real Photography Showcase */}
// //           <div className="lg:col-span-5 relative flex items-center justify-center">
// //             {/* Real Cricket Equipment Photo Stage */}
// //             <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">
// //               {/* Real Match Ground Photograph */}
// //               <img
// //                 src="/products/hero.jpg"
// //                 alt="Lord's Cricket Ground with English Willow Bat, Wickets and 4-Piece Match Ball"
// //                 className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
// //               />
              
// //               <div className="absolute inset-0 bg-gradient-to-t from-pitch-deep/90 via-pitch-deep/20 to-transparent" />

// //               {/* Floating Match-Ready Pill */}
// //               <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 bg-pitch-deep/90 backdrop-blur-md border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2">
// //                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
// //                 <div>
// //                   <p className="text-[10px] sm:text-[11px] font-bold text-linen leading-none">Match-Ready Ping</p>
// //                   <p className="text-[9px] sm:text-[10px] text-willow mt-0.5">Oiled & Machine Knocks Free</p>
// //                 </div>
// //               </div>

// //               {/* Floating Shipping Counter Badge */}
// //               <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20 bg-linen/95 backdrop-blur text-ink px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20">
// //                 <div className="flex items-center gap-2">
// //                   <span className="text-base sm:text-xl">🏏</span>
// //                   <div>
// //                     <p className="font-display text-xs sm:text-base font-extrabold leading-none text-pitch">12,000+ Pieces</p>
// //                     <p className="text-[9px] sm:text-[10px] text-ink/70 font-semibold mt-0.5">Shipped this season</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //         </div>
// //       </div>

// //       {/* Cricket Ball Red Seam Divider */}
// //       <SeamDivider className="w-full h-3.5 text-willow/40" />
// //     </section>
// //   )
// // }

// import SeamDivider from './SeamDivider'

// export default function Hero({ onShopClick }) {
//   return (
//     <section id="top" className="relative bg-gradient-to-b from-pitch-deep via-pitch to-pitch-deep text-linen overflow-hidden">
//       {/* Stadium Floodlight Radial Glows */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-willow/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-ball/10 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 md:pt-20 md:pb-28">
//         <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

//           {/* Left Hero Content */}
//           <div className="lg:col-span-7 max-w-2xl">
//             {/* Top Badge */}
//             <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-willow/30 text-willow text-xs font-semibold tracking-wide uppercase mb-6 shadow-sm">
//               <span className="w-2 h-2 rounded-full bg-ball animate-pulse" />
//               <span>Authentic Cricket Equipment • 2026 Collection</span>
//             </div>

//             {/* Main Headline */}
//             <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight mb-5 sm:mb-6">
//               Gear tested on a <span className="text-willow underline decoration-ball decoration-wavy decoration-2">real pitch</span>, not a warehouse shelf.
//             </h1>

//             {/* Subtitle */}
//             <p className="text-linen/80 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
//               Every English willow bat, leather match ball, and pro guard in our shop was picked out by active cricketers. We inspect every cleft for straight grains, sweet spot balance, and optimum rebound ping before it reaches your door.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-12">
//               <a
//                 href="#products"
//                 onClick={onShopClick}
//                 className="bg-ball hover:bg-ball-dark text-linen px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 shadow-xl hover:shadow-ball/40 flex items-center gap-2 group hover:-translate-y-0.5"
//               >
//                 <span>Shop Match Collection</span>
//                 <svg
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2.2"
//                   className="group-hover:translate-x-1 transition-transform"
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </a>

//               <a
//                 href="#craftsmanship"
//                 className="border border-white/20 hover:border-willow text-linen/90 hover:text-willow px-7 py-4 rounded-full font-medium text-sm transition-all hover:bg-white/5 flex items-center gap-2"
//               >
//                 <span>The Knocking Process</span>
//                 <span className="text-xs text-willow">→</span>
//               </a>
//             </div>

//             {/* Live Trust Badges */}
//             <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-xs">
//               <div>
//                 <p className="font-display text-xl font-bold text-willow">100%</p>
//                 <p className="text-linen/60 text-[11px] mt-0.5">Hand-Selected English Willow</p>
//               </div>
//               <div>
//                 <p className="font-display text-xl font-bold text-linen">10,000+</p>
//                 <p className="text-linen/60 text-[11px] mt-0.5">Free Machine Knocks</p>
//               </div>
//               <div>
//                 <p className="font-display text-xl font-bold text-amber-400">4.9 / 5.0</p>
//                 <p className="text-linen/60 text-[11px] mt-0.5">850+ Club Cricketers</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Hero — Animated Match Scene (replaces static photo) */}
//           <div className="lg:col-span-5 relative flex items-center justify-center">
//             <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-2xl group bg-gradient-to-b from-[#0c2b1f] via-[#123626] to-[#0a1f16]">

//               {/* Animated floodlight glows behind the scene */}
//               <div className="hero-anim-light absolute -top-10 left-6 w-40 h-40 rounded-full bg-amber-200/30 blur-2xl" />
//               <div className="hero-anim-light hero-anim-light-delay absolute -top-6 right-10 w-32 h-32 rounded-full bg-amber-200/25 blur-2xl" />

//               {/* Animated cricket scene */}
//               <svg
//                 viewBox="0 0 400 300"
//                 className="absolute inset-0 w-full h-full"
//                 preserveAspectRatio="xMidYMax slice"
//               >
//                 {/* Pitch ground */}
//                 <rect x="0" y="230" width="400" height="70" fill="#c9a15a" opacity="0.25" />
//                 <rect x="0" y="230" width="400" height="3" fill="#e8d9b0" opacity="0.35" />

//                 {/* Stumps */}
//                 <g transform="translate(300,150)">
//                   <rect x="-18" y="0" width="6" height="80" fill="#e8d9b0" />
//                   <rect x="0" y="0" width="6" height="80" fill="#e8d9b0" />
//                   <rect x="18" y="0" width="6" height="80" fill="#e8d9b0" />
//                   <rect x="-20" y="-6" width="19" height="6" fill="#e8d9b0" />
//                   <rect x="1" y="-6" width="19" height="6" fill="#e8d9b0" />
//                 </g>

//                 {/* Batter arm + bat (swings) */}
//                 <g transform="translate(120,175)">
//                   <g className="hero-anim-bat" style={{ transformOrigin: '0px 0px' }}>
//                     <rect x="-4" y="-70" width="8" height="70" rx="4" fill="#d8b46a" />
//                     <rect x="-6" y="-78" width="12" height="14" rx="3" fill="#3a2213" />
//                   </g>
//                   <circle cx="0" cy="6" r="9" fill="#f2c9a0" />
//                 </g>

//                 {/* Ball (flies from bat toward stumps, loops) */}
//                 <circle className="hero-anim-ball" cx="120" cy="150" r="6" fill="#b3222b" stroke="#7a1218" strokeWidth="1.5" />
//               </svg>

//               <div className="absolute inset-0 bg-gradient-to-t from-pitch-deep/80 via-pitch-deep/10 to-transparent" />

//               {/* Floating Match-Ready Pill */}
//               <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 bg-pitch-deep/90 backdrop-blur-md border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
//                 <div>
//                   <p className="text-[10px] sm:text-[11px] font-bold text-linen leading-none">Match-Ready Ping</p>
//                   <p className="text-[9px] sm:text-[10px] text-willow mt-0.5">Oiled & Machine Knocks Free</p>
//                 </div>
//               </div>

//               {/* Floating Shipping Counter Badge */}
//               <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 z-20 bg-linen/95 backdrop-blur text-ink px-3.5 py-2 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20">
//                 <div className="flex items-center gap-2">
//                   <span className="text-base sm:text-xl">🏏</span>
//                   <div>
//                     <p className="font-display text-xs sm:text-base font-extrabold leading-none text-pitch">12,000+ Pieces</p>
//                     <p className="text-[9px] sm:text-[10px] text-ink/70 font-semibold mt-0.5">Shipped this season</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       {/* Cricket Ball Red Seam Divider */}
//       <SeamDivider className="w-full h-3.5 text-willow/40" />

//       {/* Scoped animation keyframes for the hero scene */}
//       <style>{`
//         .hero-anim-bat {
//           animation: hero-bat-swing 2.4s ease-in-out infinite;
//         }
//         @keyframes hero-bat-swing {
//           0%, 55% { transform: rotate(-18deg); }
//           65% { transform: rotate(35deg); }
//           100% { transform: rotate(-18deg); }
//         }
//         .hero-anim-ball {
//           animation: hero-ball-fly 2.4s ease-in-out infinite;
//         }
//         @keyframes hero-ball-fly {
//           0%, 60% { transform: translate(0px, 0px) scale(1); opacity: 1; }
//           75% { transform: translate(120px, -70px) scale(0.85); opacity: 1; }
//           95% { transform: translate(165px, -20px) scale(0.7); opacity: 0.9; }
//           100% { transform: translate(0px, 0px) scale(1); opacity: 0; }
//         }
//         .hero-anim-light {
//           animation: hero-light-pulse 3.2s ease-in-out infinite;
//         }
//         .hero-anim-light-delay {
//           animation-delay: 1.1s;
//         }
//         @keyframes hero-light-pulse {
//           0%, 100% { opacity: 0.25; transform: scale(1); }
//           50% { opacity: 0.55; transform: scale(1.08); }
//         }
//       `}</style>
//     </section>
//   )
// }

import SeamDivider from './SeamDivider'

export default function Hero({ onShopClick }) {
  return (
    <section id="top" className="relative bg-gradient-to-b from-pitch-deep via-pitch to-pitch-deep text-linen overflow-hidden">
      {/* Stadium Floodlight Radial Glows */}
      <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-willow/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 sm:right-10 w-72 sm:w-96 md:w-[500px] h-72 sm:h-96 md:h-[500px] bg-ball/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-14 sm:pb-20 md:pt-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">

          {/* Left Hero Content */}
          <div className="lg:col-span-7 max-w-2xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-white/5 border border-willow/30 text-willow text-[10px] sm:text-xs font-semibold tracking-wide uppercase mb-4 sm:mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-ball animate-pulse shrink-0" />
              <span className="truncate">Authentic Cricket Equipment • 2026 Collection</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] sm:leading-[1.15] md:leading-[1.1] tracking-tight mb-4 sm:mb-5 md:mb-6">
              Gear tested on a{' '}
              <span className="text-willow underline decoration-ball decoration-wavy decoration-2">
                real pitch
              </span>
              , not a warehouse shelf.
            </h1>

            {/* Subtitle */}
            <p className="text-linen/80 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-6 md:mb-8 max-w-xl">
              Every English willow bat, leather match ball, and pro guard in our shop was picked out by active cricketers. We inspect every cleft for straight grains, sweet spot balance, and optimum rebound ping before it reaches your door.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
              <a
                href="#products"
                onClick={onShopClick}
                className="bg-ball hover:bg-ball-dark text-linen px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm transition-all duration-200 shadow-xl hover:shadow-ball/40 flex items-center justify-center gap-2 group hover:-translate-y-0.5"
              >
                <span>Shop Match Collection</span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="group-hover:translate-x-1 transition-transform shrink-0"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#craftsmanship"
                className="border border-white/20 hover:border-willow text-linen/90 hover:text-willow px-6 sm:px-7 py-3.5 sm:py-4 rounded-full font-medium text-sm transition-all hover:bg-white/5 flex items-center justify-center gap-2"
              >
                <span>The Knocking Process</span>
                <span className="text-xs text-willow">→</span>
              </a>
            </div>

            {/* Live Trust Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t border-white/10 text-xs">
              <div>
                <p className="font-display text-lg sm:text-xl font-bold text-willow">100%</p>
                <p className="text-linen/60 text-[10px] sm:text-[11px] mt-0.5 leading-snug">
                  Hand-Selected English Willow
                </p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl font-bold text-linen">10,000+</p>
                <p className="text-linen/60 text-[10px] sm:text-[11px] mt-0.5 leading-snug">
                  Free Machine Knocks
                </p>
              </div>
              <div>
                <p className="font-display text-lg sm:text-xl font-bold text-amber-400">4.9 / 5.0</p>
                <p className="text-linen/60 text-[10px] sm:text-[11px] mt-0.5 leading-snug">
                  850+ Club Cricketers
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero — Real photo */}
          <div className="lg:col-span-5 relative flex items-center justify-center order-first lg:order-last">
            <div className="relative w-full aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-2xl group">

              {/* Real Match Ground Photograph */}
              <img
                src="/products/hero.jpg"
                alt="Lord's Cricket Ground with English Willow Bat, Wickets and 4-Piece Match Ball"
                className="hero-anim-photo w-full h-full object-cover object-center"
              />

              {/* Animated diagonal light sweep */}
              <div className="hero-anim-sweep absolute inset-0 pointer-events-none" />

              {/* Soft floating light particles */}
              <span className="hero-anim-particle absolute w-1.5 h-1.5 rounded-full bg-amber-100/70 blur-[1px]" style={{ top: '30%', left: '20%' }} />
              <span className="hero-anim-particle hero-anim-particle-2 absolute w-1 h-1 rounded-full bg-amber-100/60 blur-[1px]" style={{ top: '55%', left: '65%' }} />
              <span className="hero-anim-particle hero-anim-particle-3 absolute w-1.5 h-1.5 rounded-full bg-amber-100/50 blur-[1px]" style={{ top: '15%', left: '75%' }} />

              <div className="absolute inset-0 bg-gradient-to-t from-pitch-deep/90 via-pitch-deep/20 to-transparent" />

              {/* Floating Match-Ready Pill */}
              <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 md:top-5 md:left-5 z-20 bg-pitch-deep/90 backdrop-blur-md border border-white/20 px-2.5 py-1.5 sm:px-3.5 sm:py-2 md:px-4 md:py-2.5 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-1.5 sm:gap-2">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
                <div>
                  <p className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-linen leading-none">
                    Match-Ready Ping
                  </p>
                  <p className="text-[8px] sm:text-[9px] md:text-[10px] text-willow mt-0.5">
                    Oiled & Machine Knocks Free
                  </p>
                </div>
              </div>

              {/* Floating Shipping Counter Badge */}
              <div className="absolute bottom-2.5 left-2.5 sm:bottom-4 sm:left-4 md:bottom-5 md:left-5 z-20 bg-linen/95 backdrop-blur text-ink px-3 py-1.5 sm:px-4 sm:py-2.5 md:px-5 md:py-3 rounded-xl sm:rounded-2xl shadow-2xl border border-white/20">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-sm sm:text-base md:text-xl">🏏</span>
                  <div>
                    <p className="font-display text-[11px] sm:text-sm md:text-base font-extrabold leading-none text-pitch">
                      12,000+ Pieces
                    </p>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] text-ink/70 font-semibold mt-0.5">
                      Shipped this season
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Cricket Ball Red Seam Divider */}
      <SeamDivider className="w-full h-3 sm:h-3.5 text-willow/40" />

      {/* Scoped animation keyframes */}
      <style>{`
        .hero-anim-photo {
          animation: hero-ken-burns 14s ease-in-out infinite alternate;
          transform-origin: 60% 40%;
        }
        @keyframes hero-ken-burns {
          0% { transform: scale(1) translate(0, 0); }
          100% { transform: scale(1.12) translate(-1.5%, -1%); }
        }
        .hero-anim-sweep {
          background: linear-gradient(
            115deg,
            transparent 40%,
            rgba(255, 255, 255, 0.16) 48%,
            rgba(255, 255, 255, 0.05) 52%,
            transparent 60%
          );
          background-size: 250% 250%;
          animation: hero-sweep 6s ease-in-out infinite;
        }
        @keyframes hero-sweep {
          0% { background-position: -60% -60%; }
          50% { background-position: 60% 60%; }
          100% { background-position: -60% -60%; }
        }
        .hero-anim-particle {
          animation: hero-particle-float 5s ease-in-out infinite;
        }
        .hero-anim-particle-2 { animation-delay: 1.3s; animation-duration: 6s; }
        .hero-anim-particle-3 { animation-delay: 2.6s; animation-duration: 4.4s; }
        @keyframes hero-particle-float {
          0%, 100% { transform: translate(0, 0); opacity: 0.2; }
          50% { transform: translate(6px, -14px); opacity: 0.85; }
        }
      `}</style>
    </section>
  )
}