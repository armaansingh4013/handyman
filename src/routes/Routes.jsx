import React from 'react'
import { BrowserRouter, Route, Routes  as PathRoutes} from 'react-router-dom'
import Footer from '../component/Footer'
import Home from '../pages/Home'

const Routes = () => {
  return (
    <>
    <BrowserRouter>
    <PathRoutes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/f" element={<Footer/>}></Route>

    </PathRoutes>
    </BrowserRouter>
    
    </>
  )
}

export default Routes
