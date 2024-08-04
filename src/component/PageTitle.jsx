import React from 'react'
import { useLocation } from 'react-router-dom'

const PageTite = () => {
    const location = useLocation();
    const path = location.pathname.split("/");
    const currPath = path[path.length-1]
  return (
    <>
    <div className='w-full h-72  bg-[url("https://www.shutterstock.com/image-photo/builder-handyman-260nw-383360890.jpg")]'>
      <div className='h-full flex items-center justify-center text-4xl text-white bg-[#00000094] '>{currPath.toUpperCase()}</div>
    </div></>
  )
}

export default PageTite
