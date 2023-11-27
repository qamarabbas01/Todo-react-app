import React, { useEffect, useState } from "react";
const Count = () => {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    handleApi();
  }, []);
  const handleApi = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      setApiData([data[1], data[2]]);
    } catch (error) {
      console.error("Error fetching data:", error); 
    }
  };
  const handleDelete = (postId) => {
    const updatedData = apiData.filter((item) => item.id !== postId);
    setApiData(updatedData);
  };
  return (
    <div>
      <h3>
        {apiData.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <button onClick={() => handleDelete(item.id)}className="border p-1 ml-12" >Delete</button>
          </div>
        ))}
      </h3>
    </div>
  );
};
export default Count;
