import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MainLayout() {
  return <div className='min-h-screen bg-primary-black text-secondary-light'><Header /><main className='pt-20'><Outlet /></main><Footer /></div>
}
