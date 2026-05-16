import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Loader } from './components/Loader'
import MainLayout from './layouts/MainLayout'

const Home = lazy(() => import('./pages/Home'))
const Developers = lazy(() => import('./pages/Developers'))
const Ecosystem = lazy(() => import('./pages/Ecosystem'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader label="Loading CoinByte page" />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
