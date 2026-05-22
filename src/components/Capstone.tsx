import { type ReactNode } from 'react'

export default function Capstone({ name, children }: { name: string; children: ReactNode }) {
  return (
    <div className="capstone">
      <p className="capstone-label">Венец</p>
      <p className="capstone-name">{name}</p>
      {children}
    </div>
  )
}
