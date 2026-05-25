import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/react'
import Layout from './components/Layout'
import { mdxComponents } from './mdx-components'

const Home             = lazy(() => import('./content/index.mdx'))
const Trirechye        = lazy(() => import('./content/world/trirechye.mdx'))
const Map              = lazy(() => import('./content/world/map.mdx'))
const Narody           = lazy(() => import('./content/character/narody.mdx'))
const Predystorii      = lazy(() => import('./content/character/predystorii.mdx'))
const Classes          = lazy(() => import('./content/character/classes.mdx'))
const Contracts        = lazy(() => import('./content/character/contracts.mdx'))
const SpellsVedun      = lazy(() => import('./content/character/spells/vedun.mdx'))
const SpellsVolkhv     = lazy(() => import('./content/character/spells/volkhv.mdx'))
const SpellsKnizhnik   = lazy(() => import('./content/character/spells/knizhnik.mdx'))
const Berserk          = lazy(() => import('./content/character/classes/berserk.mdx'))
const Bogatyr          = lazy(() => import('./content/character/classes/bogatyr.mdx'))
const Vedun            = lazy(() => import('./content/character/classes/vedun.mdx'))
const Volkhv           = lazy(() => import('./content/character/classes/volkhv.mdx'))
const Knizhnik         = lazy(() => import('./content/character/classes/knizhnik.mdx'))
const Okhotnik         = lazy(() => import('./content/character/classes/okhotnik.mdx'))
const Plut             = lazy(() => import('./content/character/classes/plut.mdx'))
const Ratnik           = lazy(() => import('./content/character/classes/ratnik.mdx'))
const Kharizma         = lazy(() => import('./content/rules/kharizma.mdx'))
const Intellekt        = lazy(() => import('./content/rules/intellekt.mdx'))
const Mery             = lazy(() => import('./content/rules/mery.mdx'))
const Otdykh           = lazy(() => import('./content/rules/otdykh.mdx'))
const Oruzhie          = lazy(() => import('./content/equipment/oruzhie.mdx'))
const Dospekhi         = lazy(() => import('./content/equipment/dospekhi.mdx'))
const Donate           = lazy(() => import('./content/donate.mdx'))

function Page({ Component }: { Component: React.ComponentType }) {
  return (
    <Suspense>
      <Component />
    </Suspense>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <MDXProvider components={mdxComponents}>
        <Layout>
          <Routes>
            <Route path="/"                        element={<Page Component={Home} />} />
            <Route path="/world/trirechye"         element={<Page Component={Trirechye} />} />
            <Route path="/world/map"               element={<Page Component={Map} />} />
            <Route path="/character/narody"        element={<Page Component={Narody} />} />
            <Route path="/character/predystorii"   element={<Page Component={Predystorii} />} />
            <Route path="/character/classes"       element={<Page Component={Classes} />} />
            <Route path="/character/contracts"     element={<Page Component={Contracts} />} />
            <Route path="/character/spells/vedun"     element={<Page Component={SpellsVedun} />} />
            <Route path="/character/spells/volkhv"    element={<Page Component={SpellsVolkhv} />} />
            <Route path="/character/spells/knizhnik"  element={<Page Component={SpellsKnizhnik} />} />
            <Route path="/character/berserk"       element={<Page Component={Berserk} />} />
            <Route path="/character/bogatyr"       element={<Page Component={Bogatyr} />} />
            <Route path="/character/vedun"         element={<Page Component={Vedun} />} />
            <Route path="/character/volkhv"        element={<Page Component={Volkhv} />} />
            <Route path="/character/knizhnik"      element={<Page Component={Knizhnik} />} />
            <Route path="/character/okhotnik"      element={<Page Component={Okhotnik} />} />
            <Route path="/character/plut"          element={<Page Component={Plut} />} />
            <Route path="/character/ratnik"        element={<Page Component={Ratnik} />} />
            <Route path="/rules/kharizma"          element={<Page Component={Kharizma} />} />
            <Route path="/rules/intellekt"         element={<Page Component={Intellekt} />} />
            <Route path="/rules/mery"              element={<Page Component={Mery} />} />
            <Route path="/rules/otdykh"            element={<Page Component={Otdykh} />} />
            <Route path="/equipment/oruzhie"       element={<Page Component={Oruzhie} />} />
            <Route path="/equipment/dospekhi"      element={<Page Component={Dospekhi} />} />
            <Route path="/donate"                  element={<Page Component={Donate} />} />
          </Routes>
        </Layout>
      </MDXProvider>
    </BrowserRouter>
  )
}
