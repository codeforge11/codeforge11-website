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

export function Dots({ filled, colors = ["red","orange","yellow","green","blue"] }) {
  return (
    <span className="ratingDots">
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`ratingDot`}
          style={
            i < filled
              ? { backgroundColor: colors[i] }
              : undefined
          }
          aria-hidden="true"
        />
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