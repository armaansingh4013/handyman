import React from "react";
import{ Link ,useLocation}from "react-router-dom"
const AdminSidebar = () => {
    const location = useLocation();
    const path = location.pathname.split("/");
    const currPath = path[2]
  return (
    <>
    
      <div className="w-1/3 lg:w-1/5 h-screen p-4">
        <div className="bg-black h-fullk text-white">
            <ul className="w-full p-2 text-lg">
                <li className={`text-center p-4 m-2 rounded ${currPath==="home"?"bg-[var(--primary-color)]":""}`}> <Link to="/admin/home"> Home</Link></li>
               <li className={`text-center p-4 m-2 rounded ${currPath==="work"?"bg-[var(--primary-color)]":""}`}> <Link to="/admin/work" > Work</Link></li>
                <li className={`text-center p-4 m-2 rounded ${currPath==="services"?"bg-[var(--primary-color)]":""}`}><Link to="/admin/services" >Services</Link></li>
                <li className={`text-center p-4 m-2 rounded ${currPath==="serviceItem"?"bg-[var(--primary-color)]":""}`}><Link to="/admin/serviceItem" >Services Item</Link></li>
                <li className={`text-center p-4 m-2 rounded ${currPath==="reviews"?"bg-[var(--primary-color)]":""}`}><Link to="/admin/reviews" >Reviews</Link></li>
                <li className={`text-center p-4 m-2 rounded ${currPath==="queries"?"bg-[var(--primary-color)]":""}`}><Link to="/admin/queries" >Queries</Link></li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
