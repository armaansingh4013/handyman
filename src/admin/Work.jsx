import React, { useEffect, useState } from 'react'

const Work = () => {
  const base_url = "http://localhost:3001"
  const [work, setWork] = useState([]);
  const [error, setError] = useState(null);
 
  const [loaded, setLoaded] = useState(false);


  


  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/workareas`);
        if (!response.ok) {
          throw new Error('Failed to fetch work areas');
        }
        const data = await response.json();
        console.log(data);
        
        setWork(data);
      } catch (error) {
        setError(error.message);
      }
    };

      setLoaded(true);
    fetchWorkAreas();
  }, []);





  return (
    <div>
      {work.map((w)=>{return(<> <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 transform transition duration-500 hover:scale-105">
      <img className="w-full h-48 object-cover" src={`http://localhost:3001/${w.image}`} alt={w.name} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">{w.name}</h2>
      </div>
    </div></>)})}
    </div>
  )
}

export default Work
