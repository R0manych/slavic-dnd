import { NavLink } from 'react-router-dom'

type SubLink = { to: string; label: string }
type NavLink = { to: string; label: string; sub?: SubLink[] }
type NavSection = { title: string; links: NavLink[] }

const nav: NavSection[] = [
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
      { to: '/character/vedun', label: '— Ведун', sub: [
        { to: '/character/spells/vedun', label: 'Заклинания' },
      ]},
      { to: '/character/volkhv', label: '— Волхв', sub: [
        { to: '/character/spells/volkhv', label: 'Заклинания' },
      ]},
      { to: '/character/knizhnik', label: '— Книжник', sub: [
        { to: '/character/spells/knizhnik', label: 'Заклинания' },
      ]},
      { to: '/character/okhotnik', label: '— Охотник' },
      { to: '/character/plut', label: '— Плут' },
      { to: '/character/ratnik', label: '— Ратник' },
      { to: '/character/contracts', label: 'Договоры' },
    ],
  },
  {
    title: 'Правила',
    links: [
      { to: '/rules/kharizma', label: 'Харизма' },
      { to: '/rules/intellekt', label: 'Интеллект' },
      { to: '/rules/mery', label: 'Меры длины' },
      { to: '/rules/otdykh', label: 'Отдых' },
    ],
  },
  {
    title: 'Снаряжение',
    links: [
      { to: '/equipment/oruzhie', label: 'Оружие' },
      { to: '/equipment/dospekhi', label: 'Доспехи' },
    ],
  },
  {
    title: 'Прочее',
    links: [
      { to: '/donate', label: 'Поддержать' },
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
                {link.sub && (
                  <ul className="sidebar-subnav">
                    {link.sub.map((sub) => (
                      <li key={sub.to}>
                        <NavLink
                          to={sub.to}
                          className={({ isActive }) => isActive ? 'active' : undefined}
                        >
                          {sub.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  )
}