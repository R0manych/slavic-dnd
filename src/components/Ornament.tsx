type OrnamentSize = 'sm' | 'md' | 'lg'

const ornaments: Record<OrnamentSize, { viewBox: string; content: React.ReactNode }> = {
  lg: {
    viewBox: '0 0 360 24',
    content: (
      <>
        <line x1="20" y1="12" x2="130" y2="12" stroke="currentColor" strokeWidth="0.6"/>
        <circle cx="138" cy="12" r="1.8" fill="currentColor"/>
        <circle cx="148" cy="12" r="1.2" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <path d="M 162 12 L 175 4 L 188 12 L 175 20 Z" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <circle cx="175" cy="12" r="2.5" fill="currentColor"/>
        <circle cx="212" cy="12" r="1.2" fill="none" stroke="currentColor" strokeWidth="0.6"/>
        <circle cx="222" cy="12" r="1.8" fill="currentColor"/>
        <line x1="230" y1="12" x2="340" y2="12" stroke="currentColor" strokeWidth="0.6"/>
      </>
    ),
  },
  md: {
    viewBox: '0 0 280 18',
    content: (
      <>
        <line x1="20" y1="9" x2="115" y2="9" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="122" cy="9" r="1.5" fill="currentColor"/>
        <path d="M 133 9 L 140 4 L 147 9 L 140 14 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
        <circle cx="140" cy="9" r="2" fill="currentColor"/>
        <circle cx="158" cy="9" r="1.5" fill="currentColor"/>
        <line x1="165" y1="9" x2="260" y2="9" stroke="currentColor" strokeWidth="0.5"/>
      </>
    ),
  },
  sm: {
    viewBox: '0 0 140 12',
    content: (
      <>
        <line x1="10" y1="6" x2="56" y2="6" stroke="currentColor" strokeWidth="0.5"/>
        <path d="M 64 6 L 70 2 L 76 6 L 70 10 Z" fill="currentColor"/>
        <line x1="84" y1="6" x2="130" y2="6" stroke="currentColor" strokeWidth="0.5"/>
      </>
    ),
  },
}

export default function Ornament({ size = 'md' }: { size?: OrnamentSize }) {
  const { viewBox, content } = ornaments[size]
  return (
    <svg
      className={`ornament${size !== 'md' ? ` ${size}` : ''}`}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {content}
    </svg>
  )
}
