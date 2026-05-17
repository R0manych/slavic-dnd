import { type ReactNode } from 'react'
import Ornament from './Ornament'

interface CoverProps {
  title: string
  subtitle: string
  epigraph?: string
}

export default function Cover({ title, subtitle, epigraph }: CoverProps) {
  return (
    <div className="cover">
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <Ornament size="lg" />
      {epigraph && <p className="epigraph">{epigraph}</p>}
    </div>
  )
}

export function PageHeader({ title, subtitle, children }: { title: string; subtitle: string; children?: ReactNode }) {
  return (
    <>
      <h1>{title}</h1>
      <p className="subtitle">{subtitle}</p>
      {children}
    </>
  )
}
