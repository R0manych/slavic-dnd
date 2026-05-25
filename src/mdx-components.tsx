import { type MDXComponents } from 'mdx/types'
import { Link } from 'react-router-dom'
import Cover, { PageHeader } from './components/Cover'
import Ornament from './components/Ornament'
import { Card, Note } from './components/Card'
import Feature from './components/Feature'
import { Stats, StatRow } from './components/Stats'
import { Grid, GridCard } from './components/Grid'
import Colophon from './components/Colophon'
import Power from './components/Power'
import Capstone from './components/Capstone'
import SpellLink, { SpellList } from './components/SpellLink'

export const mdxComponents: MDXComponents = {
  Cover,
  PageHeader,
  Ornament,
  Card,
  Note,
  Feature,
  Power,
  Capstone,
  Stats,
  StatRow,
  Grid,
  GridCard,
  Colophon,
  Link,
  SpellLink,
  SpellList,
}
