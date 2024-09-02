import React, { useEffect ,useState} from 'react'
import Query from './Components/Query';

const Queries = () => {
    const base_url = "http://localhost:3001"
  const [queries, setQueries] = useState([]);
  const [error, setError] = useState(null);
 
  const [loaded, setLoaded] = useState(false);


  


  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/enquiries`);
        if (!response.ok) {
          throw new Error('Failed to fetch work areas');
        }
        const data = await response.json();
        
        setQueries(data);
      } catch (error) {
        setError(error.message);
      }
    };

      setLoaded(true);
    fetchWorkAreas();
  }, []);







  return (
    <div className='flex flex-wrap w-full bg-gray-100 h-full overflow-scroll'>
        
      {queries.map((q,index)=><Query key={index} {...q} />)}
    </div>
  )
}

export default Queries

