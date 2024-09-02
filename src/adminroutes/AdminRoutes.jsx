import React from 'react'
import {  Route, Routes  as PathRoutes} from 'react-router-dom'

import Dashboard from '../admin/Dashboard'
import Login from '../admin/Login'
import Work from '../admin/Work'
import Services from '../admin/Services'
import ServiceItem from '../admin/ServiceItem'
import Reviews from '../admin/Reviews'
import Queries from '../admin/Queries'


const Routes = () => {
  return (
    <>
    
      <div className='p-4 w-4/5 h-screen'>
    <PathRoutes>
      <Route path="/admin/home" element={<Dashboard/>}/>
      <Route path="/admin/" element={<Login/>}/>
      <Route path="/admin/work" element={<Work/>}/>
      <Route path="/admin/services" element={<Services/>}/>
      <Route path="/admin/serviceItem" element={<ServiceItem/>}/>
      <Route path="/admin/reviews" element={<Reviews/>}/>
      <Route path="/admin/queries" element={<Queries/>}/>
      

    </PathRoutes>
    
    </div>

    </>
  )
}

export default Routes
