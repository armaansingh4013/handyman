import React, { useState } from 'react'
import ItemsSection from '../component/Services/ItemsSection'
import Sidebar from '../component/Services/Sidebar'
import PageTitle from '../component/PageTitle';

const Services = () => {
    const categories = ["Popular","Electrical","Pulumber","Kitchen"];
    const [selectedItem,setSelectedItem] = useState("Popular");
  return (
    <>
    <PageTitle/>
    <div className='flex flex-col sm:flex-row justify-evenly bg-gradient-to-br from-black via-gray-800 to-gray-500'>
        
     <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} categories={categories}/>
    <ItemsSection selectedItem={selectedItem}/>

    </div></>
  )
}

export default Services
