export default function SeamDivider({ className = '' }) {
  return (
    <svg
      viewBox="0 0 400 20"
      className={`w-full h-3 sm:h-3.5 ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {/* Main horizontal line */}
      <line
        x1="0"
        y1="10"
        x2="400"
        y2="10"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.45"
      />

      {/* Diagonal seam stitches */}
      {Array.from({ length: 40 }).map((_, i) => (
        <line
          key={i}
          x1={i * 10 + 3}
          y1="5"
          x2={i * 10 + 7}
          y2="15"
          stroke="currentColor"
          strokeWidth="1.4"
          opacity="0.9"
        />
      ))}
    </svg>
  )
}