import Ornament from './Ornament'

export default function Colophon({ children }: { children: string }) {
  return (
    <footer className="colophon">
      <Ornament size="sm" />
      <p>{children}</p>
    </footer>
  )
}
