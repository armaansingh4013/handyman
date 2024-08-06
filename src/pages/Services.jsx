import React, { useEffect, useState } from 'react'
import ItemsSection from '../component/Services/ItemsSection'
import Sidebar from '../component/Services/Sidebar'
import PageTitle from '../component/PageTitle';

const Services = () => {
  const base_url = "http://localhost:3001"
  const [categories, setCategories] = useState([{name:"Popular"}]);
  const [error, setError] = useState(null);
    const [selectedItem,setSelectedItem] = useState("Popular");
    const [loaded, setLoaded] = useState(false);
    
  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/categories`);
        if (!response.ok) {
          throw new Error('Failed to fetch work areas');
        }
        const data = await response.json();
        
        setCategories((prevCategories) => [...prevCategories, ...data]);
      } catch (error) {
        setError(error.message);
      }
    };

      setLoaded(true);
    fetchWorkAreas();
  }, []);
    // const categories = ["Popular","Electrical","Pulumber","Kitchen"];
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
