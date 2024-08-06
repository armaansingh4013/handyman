import React from 'react'
import {  Route, Routes  as PathRoutes} from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Work from '../pages/Work'
import CategoryWork from '../pages/CategoryWork'
import WorkItem from '../pages/WorkItem'

const Routes = () => {
  return (
    <>
    
    <PathRoutes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/work" element={<Work/>}/>
      <Route path="/work/:name" element={<CategoryWork/>}/>
      <Route path="/workItem/:id" element={<WorkItem/>}/>

    </PathRoutes>
    
    
    </>
  )
}

export default Routes
