import { type ReactNode } from 'react'

export function Stats({ children }: { children: ReactNode }) {
  return <div className="stats">{children}</div>
}

export function StatRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="stat-row">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  )
}
