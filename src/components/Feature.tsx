import { type ReactNode } from 'react'

export default function Feature({ label, name, children }: { label: string; name?: string; children: ReactNode }) {
  return (
    <div className="feature" data-label={label}>
      {name && <p className="feature-name">{name}</p>}
      {children}
    </div>
  )
}
