import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

export function Grid({ children }: { children: ReactNode }) {
  return <div className="grid">{children}</div>
}

export function GridCard({
  to,
  meta,
  title,
  desc,
}: {
  to: string
  meta: string
  title: string
  desc: string
}) {
  return (
    <div className="grid-card">
      <Link to={to}>
        <p className="grid-card-meta">{meta}</p>
        <h4>{title}</h4>
        <p className="grid-card-desc">{desc}</p>
      </Link>
    </div>
  )
}
