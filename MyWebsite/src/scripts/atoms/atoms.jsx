export function SectionLabel({ number, children }) {
  return (
    <div className="sectionLabel">
      <span className="sectionLabelLine" />
      <span className="mono sectionLabelText">
        {number} — {children}
      </span>
    </div>
  )
}

export function Dots({ filled }) {
  return (
    <span className="ratingDots">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`ratingDot${i < filled ? ' filled' : ''}`} />
      ))}
    </span>
  )
}

export function Tag({ label }) {
  return (
    <span className="mono">
      {label}
    </span>
  )
}

export function StatusBadge({ status }) {
  const statusClass = status.toLowerCase()

  return (
    <span className={`mono statusBadge ${statusClass}`}>
      {status}
    </span>
  )
}