import React, { useEffect, useState } from 'react'
import PageTite from '../component/PageTitle'
import CategoryWorkCard from '../component/CategoryWorkCard'

const CategoryWork = () => {
    const [loaded, setLoaded] = useState(false);


  useEffect(() => {
      setLoaded(true);
    
  }, []);
  
  return (
    <>
    <PageTite/>
    <div className='bg-gradient-to-br from-black via-gray-600 to-gray-500'>
        <div className={`flex flex-wrap justify-center transform transition-all duration-150 ease-out ${loaded?'scale-100':'scale-0'}`}>
        <CategoryWorkCard/>
        <CategoryWorkCard/>
        <CategoryWorkCard/>
        <CategoryWorkCard/>
        <CategoryWorkCard/>
        <CategoryWorkCard/>
        <CategoryWorkCard/>
        <CategoryWorkCard/>
        <CategoryWorkCard/>
        </div>
    </div>
    </>
  )
}

export default CategoryWork
