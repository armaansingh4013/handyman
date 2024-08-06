import React, { useEffect, useState } from "react";
import PageTite from "../component/PageTitle";
import CategoryWorkCard from "../component/CategoryWorkCard";
import { useParams } from "react-router-dom";

const CategoryWork = () => {
  
  const base_url = "http://localhost:3001"
  const [loaded, setLoaded] = useState(false);
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch(
          `${base_url}/api/services/Workarea?workAreaName=${name}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch work areas");
        }
        const data = await response.json();

        setItems(data);
      } catch (error) {
        // setError(error.message);
      }
    };

    setLoaded(true);
    fetchWork();
  }, []);
  return (
    <>
      <PageTite />
      <div className="bg-gradient-to-br from-black via-gray-600 to-gray-500 flex justify-center">
        <div
          className={`flex flex-wrap justify-centerm w-11/12 transform transition-all duration-150 ease-out ${
            loaded ? "scale-100" : "scale-0"
          }`}
        >
           {items.length > 0 ? (
          items.map((item, index) => (
          <CategoryWorkCard key={index} item={item}/> ))
        ) : (
          <p>No items found.</p>
        )}
          
        </div>
      </div>
    </>
  );
};

export default CategoryWork;
