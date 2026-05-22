import { type ReactNode } from 'react'

const restLabel: Record<string, string> = {
  short: 'Короткий отдых',
  long:  'Длинный отдых',
}

export default function Power({ rest, name, label, children }: { rest: 'short' | 'long'; name: string; label?: string; children: ReactNode }) {
  return (
    <div className="power" data-rest={rest} data-label={label}>
      <div className="power-header">
        <span className="power-name">{name}</span>
        <span className="power-rest">{restLabel[rest] ?? rest}</span>
      </div>
      {children}
    </div>
  )
}
