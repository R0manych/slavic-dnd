import { type ReactNode } from 'react'

export function Card({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <div className="card">
      {title && <p className="card-title">{title}</p>}
      {children}
    </div>
  )
}

export function Note({ children }: { children: ReactNode }) {
  return <div className="note">{children}</div>
}
