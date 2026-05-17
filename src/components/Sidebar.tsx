import { NavLink } from 'react-router-dom'

const nav = [
  {
    title: 'Начало',
    links: [
      { to: '/', label: 'О мире' },
    ],
  },
  {
    title: 'Мир',
    links: [
      { to: '/world/trirechye', label: 'Триречье' },
      { to: '/world/map', label: 'Карта' },
    ],
  },
  {
    title: 'Персонаж',
    links: [
      { to: '/character/narody', label: 'Народы' },
      { to: '/character/predystorii', label: 'Предыстории' },
      { to: '/character/classes', label: 'Классы' },
      { to: '/character/berserk', label: '— Берсерк' },
      { to: '/character/bogatyr', label: '— Богатырь' },
      { to: '/character/vedun', label: '— Ведун' },
      { to: '/character/volkhv', label: '— Волхв' },
      { to: '/character/knizhnik', label: '— Книжник' },
      { to: '/character/okhotnik', label: '— Охотник' },
      { to: '/character/plut', label: '— Плут' },
      { to: '/character/ratnik', label: '— Ратник' },
    ],
  },
  {
    title: 'Правила',
    links: [
      { to: '/rules/kharizma', label: 'Харизма' },
      { to: '/rules/intellekt', label: 'Интеллект' },
      { to: '/rules/mery', label: 'Меры длины' },
    ],
  },
  {
    title: 'Снаряжение',
    links: [
      { to: '/equipment/oruzhie', label: 'Оружие' },
      { to: '/equipment/dospekhi', label: 'Доспехи' },
    ],
  },
]

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Триречье</h2>
      <p className="sidebar-sub">Свод</p>

      {nav.map((section) => (
        <div key={section.title} className="sidebar-section">
          <p className="sidebar-section-title">{section.title}</p>
          <ul className="sidebar-nav">
            {section.links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => isActive ? 'active' : undefined}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}
