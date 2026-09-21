// Shaded, dimensional product illustrations (gradient-filled, not flat line icons)
// so tiles look like polished studio renders rather than clipart.

const defs = (id, light, dark) => (
  <defs>
    <linearGradient id={id} x1="20%" y1="0%" x2="80%" y2="100%">
      <stop offset="0%" stopColor={light} />
      <stop offset="100%" stopColor={dark} />
    </linearGradient>
  </defs>
)

export function BatIcon({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {defs('batGrad', '#E4CD98', '#9C7C3E')}
      <g filter="none">
        <path
          d="M46 14c7 0 12 6 12 13 0 5-2 9-5 14L34 76c-2 3-6 4-9 2-3-2-4-6-2-9l19-35c3-5 4-8 4-13 0-4 -1-7 -3-9z"
          fill="url(#batGrad)"
          stroke="#4A3A18"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M28 71l-9 16c-1.5 3-5 4-8 2.5-3-1.5-4-5-2.5-8l10-16"
          fill="#3B2E14"
          stroke="#1F1809"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path d="M38 28c3 1 6 4 7 8" stroke="#6B5323" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
        <path d="M33 37c3 1 6 4 7 8" stroke="#6B5323" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
        <path d="M40 20c4 4 5 9 4 15" stroke="#F6E9C4" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      </g>
    </svg>
  )
}

export function BallIcon({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {defs('ballGrad', '#D14B3D', '#7C2419')}
      <circle cx="50" cy="50" r="32" fill="url(#ballGrad)" stroke="#4A140D" strokeWidth="1.2" />
      <circle cx="40" cy="40" r="10" fill="#fff" opacity="0.18" />
      <path d="M28 27c8 8 12 15 12 23s-4 15-12 23" stroke="#F3D9B8" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.9" />
      <path d="M72 27c-8 8-12 15-12 23s4 15 12 23" stroke="#F3D9B8" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.9" />
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={'l' + i} x1={30 + i * 5} y1={47} x2={30 + i * 5} y2={53} stroke="#F3D9B8" strokeWidth="1.2" opacity="0.9" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={'r' + i} x1={70 - i * 5} y1={47} x2={70 - i * 5} y2={53} stroke="#F3D9B8" strokeWidth="1.2" opacity="0.9" />
      ))}
    </svg>
  )
}

export function PadIcon({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {defs('padGrad', '#F6EFDD', '#C9BE9C')}
      <path
        d="M38 12h24c4 0 7 3 7 7v20c0 6-2 11-5 16l-9 22c-1 3-4 5-7 5h-1c-3 0-6-2-7-5l-9-22c-3-5-5-10-5-16V19c0-4 3-7 7-7z"
        fill="url(#padGrad)"
        stroke="#5B5643"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <line x1="38" y1="30" x2="62" y2="30" stroke="#8C8463" strokeWidth="1.6" />
      <line x1="36" y1="44" x2="64" y2="44" stroke="#8C8463" strokeWidth="1.6" />
      <line x1="38" y1="58" x2="62" y2="58" stroke="#8C8463" strokeWidth="1.6" />
      <path d="M30 24h-7M30 40h-8M32 56h-7" stroke="#3E3A2C" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M42 18c6 3 9 8 9 15" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function GloveIcon({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {defs('gloveGrad', '#F6EFDD', '#C9BE9C')}
      <path
        d="M32 46V24a6 6 0 0112 0v14M44 38V18a6 6 0 0112 0v20M56 38V20a6 6 0 0112 0v18M68 40V26a5.5 5.5 0 0111 0v30c0 14-10 26-24 26H45c-9 0-16-6-19-14l-6-16c-1.5-4 0.5-8 4-9.5 3.5-1.5 7.5 0 9 3.5l4 9"
        fill="url(#gloveGrad)"
        stroke="#5B5643"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <line x1="44" y1="46" x2="44" y2="58" stroke="#8C8463" strokeWidth="1.4" opacity="0.8" />
      <line x1="56" y1="44" x2="56" y2="58" stroke="#8C8463" strokeWidth="1.4" opacity="0.8" />
      <path d="M40 30c1 4 1 8 0 12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" opacity="0.45" />
    </svg>
  )
}

export function BagIcon({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {defs('bagGrad', '#2A4634', '#132018')}
      <path
        d="M22 40c0-6 4-10 10-10h36c6 0 10 4 10 10v34c0 6-4 10-10 10H32c-6 0-10-4-10-10V40z"
        fill="url(#bagGrad)"
        stroke="#0A100C"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M38 30v-6c0-5 4-9 9-9h6c5 0 9 4 9 9v6" stroke="#C8A868" strokeWidth="2.4" strokeLinecap="round" fill="none" />
      <line x1="22" y1="54" x2="78" y2="54" stroke="#C8A868" strokeWidth="2" opacity="0.85" />
      <line x1="32" y1="40" x2="32" y2="74" stroke="#4A6B54" strokeWidth="1.4" opacity="0.7" />
      <line x1="68" y1="40" x2="68" y2="74" stroke="#4A6B54" strokeWidth="1.4" opacity="0.7" />
      <circle cx="50" cy="54" r="2.4" fill="#E4CD98" />
      <path d="M26 44c2 6 2 12 0 18" stroke="#5C7E67" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    </svg>
  )
}

export function StumpsIcon({ className }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {defs('stumpGrad', '#E4CD98', '#9C7C3E')}
      <rect x="20" y="20" width="6" height="60" rx="2" fill="url(#stumpGrad)" />
      <rect x="47" y="14" width="6" height="66" rx="2" fill="url(#stumpGrad)" />
      <rect x="74" y="20" width="6" height="60" rx="2" fill="url(#stumpGrad)" />
      <rect x="16" y="12" width="14" height="6" rx="2" fill="url(#stumpGrad)" />
      <rect x="43" y="6" width="14" height="6" rx="2" fill="url(#stumpGrad)" />
      <rect x="70" y="12" width="14" height="6" rx="2" fill="url(#stumpGrad)" />
    </svg>
  )
}