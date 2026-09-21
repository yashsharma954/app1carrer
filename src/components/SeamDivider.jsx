export default function SeamDivider({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 20"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line x1="0" y1="10" x2="400" y2="10" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      {Array.from({ length: 40 }).map((_, i) => (
        <line
          key={i}
          x1={i * 10 + 3}
          y1="5"
          x2={i * 10 + 7}
          y2="15"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  )
}
