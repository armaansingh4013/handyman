import React, { useState ,useEffect} from "react";
import { useParams } from "react-router-dom";

const WorkItem = () => {
  
  const base_url = "http://localhost:3001"
  const {id} = useParams()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [item,setItem] = useState({name:"",description:"",images:[]});
  
    // const images = [
    //     'https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg',
    //     'https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg',
    //     'https://static.wixstatic.com/media/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg/v1/fill/w_364,h_726,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/74f558_4ef3f401e4a2400a8979c42d1a7ba1a7~mv2_d_5760_3840_s_4_2.jpeg',
    //   ];

    const images =item.images

    
  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/service?id=${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch work areas');
        }
        const data = await response.json();
       
        
        setItem(data);
      } catch (error) {
        // setError(error.message);
      }
    };

    fetchWorkAreas();
  }, []);

  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };


  return (
    <>
      <div className="h-24 bg-gray-700"></div>
    <div className="flex flex-col md:flex-row items-center justify-evenly bg-gray-100 h-screen">
    
  <div className="w-full md:w-3/6 h-1/2 py-26 md:h-4/5">
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div className="absolute w-full h-full flex transition-opacity duration-1000 ease-in-out">
        {images.map((image, index) => (
          <img
            key={index}
            src={"http://localhost:3001/"+image}
            alt={`slide ${index}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      {/* Left Button */}
      <button
        onClick={handlePrevClick}
        className="absolute left-2 p-3 bg-gray-800 bg-opacity-30 text-white rounded-full"
      >
        <i className="fa-solid fa-angles-left"></i>
      </button>
      {/* Right Button */}
      <button
        onClick={handleNextClick}
        className="absolute right-2 p-3 bg-gray-800 bg-opacity-30 text-white rounded-full"
      >
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  </div>
  <div className="w-full md:w-2/5 p-8  space-y-4 md:h-full flex flex-col justify-center">
    <span className="text-3xl font-bold">{item.name}</span>
    <p>
      {item.description}
    </p>
    {/* <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat delectus quod cupiditate.
    </p> */}
  </div>
</div>
    </>
  );
};

export default WorkItem;
