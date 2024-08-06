import React, { useEffect,useState } from "react";
import ItemCard from "./ItemCard";

const ItemsSection = ({selectedItem}) => {
  
  const base_url = "http://localhost:3001"
  const [items,setItems] = useState([{}]);
  useEffect(() => {
    const fetchWorkAreas = async () => {
      try {
        const response = await fetch(`${base_url}/api/services/category?categoryName=${selectedItem}`
         
        );
        if (!response.ok) {
          throw new Error('Failed to fetch work areas');
        }
        const data = await response.json();
        
        setItems(data);
      } catch (error) {
        // setError(error.message);
console.log(error.message);

      }
    };

      // setLoaded(true);     
    fetchWorkAreas();
  }, [selectedItem]);

  
  return (
    < div className="w-full sm:w-2/3 bg-gray-5f00 sm:my-8 p-3 rounded-lg">
    <div className="hidden sm:block text-center text-3xl py-4 my-2 font-medium text-[var(--primary-color)] bg-gray-500 rounded-2xl bg-opacity-30">{selectedItem.toUpperCase()}</div>
      <div className="flex flex-wrap items-center ljustify-center">
      {items.length > 0 ? (
          items.map((item, index) => (
        <ItemCard key={index} item={item}/>
      ))
    ) : (
      <p>No items found.</p>
    )}
       
      </div>
    </div>
  );
};

export default ItemsSection;
