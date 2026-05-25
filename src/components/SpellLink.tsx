import { type ReactNode } from 'react'

export function SpellList({ children }: { children: ReactNode }) {
  return <div className="spell-list">{children}</div>
}

export default function SpellLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="spell-link" target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}