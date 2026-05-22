import { type ReactNode } from 'react'

const restLabel: Record<string, string> = {
  short: 'Короткий отдых',
  long:  'Длинный отдых',
}

export default function Power({ rest, name, children }: { rest: 'short' | 'long'; name: string; children: ReactNode }) {
  return (
    <div className="power" data-rest={rest}>
      <div className="power-header">
        <span className="power-name">{name}</span>
        <span className="power-rest">{restLabel[rest] ?? rest}</span>
      </div>
      {children}
    </div>
  )
}
