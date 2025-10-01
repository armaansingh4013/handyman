
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [location.pathname])
  return (
    <>
      <Header />
      <main className={isHome ? 'p-0 m-0' : 'mx-auto pt-16'}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
