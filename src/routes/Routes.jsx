import React from 'react'
import { BrowserRouter, Route, Routes  as PathRoutes} from 'react-router-dom'
import Header from '../component/Header/Header'
import Footer from '../component/Footer/Footer'

const Routes = () => {
  return (
    <>
    <BrowserRouter>
    <PathRoutes>
      <Route path="/" element={<Header/>}></Route>
      <Route path="/f" element={<Footer/>}></Route>

    </PathRoutes>
    </BrowserRouter>
    
    </>
  )
}

export default Routes
