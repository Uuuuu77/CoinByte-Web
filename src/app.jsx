import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Developers from './pages/Developers'
import Ecosystem from './pages/Ecosystem'
import Pricing from './pages/Pricing'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import NotFound from './pages/NotFound'

function normalizeBasename(baseUrl) {
  if (!baseUrl || baseUrl === '.' || baseUrl === './') {
    return '/'
  }

  const baseWithLeadingSlash = baseUrl.startsWith('/') ? baseUrl : `/${baseUrl}`

  if (baseWithLeadingSlash !== '/' && baseWithLeadingSlash.endsWith('/')) {
    return baseWithLeadingSlash.slice(0, -1)
  }

  return baseWithLeadingSlash
}

export default function App() {
  const basename = normalizeBasename(import.meta.env.BASE_URL)

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/developers' element={<Developers />} />
          <Route path='/ecosystem' element={<Ecosystem />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/terms' element={<Terms />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
