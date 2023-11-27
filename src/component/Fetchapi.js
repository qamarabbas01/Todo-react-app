import React, { useEffect, useState } from "react";
const Fetchapi = () =>{
const [apiData, setApiData] = useState([]);

useEffect(() => {
  HandleApi();
}, []);

const HandleApi = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("ohoo")
    }
    const data = await res.json();
    setApiData(data);
  } catch (error) {
    console.error(`EROR AGAY HA PAGAL`, error);
  }

  const handleDelete = (postId) => {
    const updatedData = apiData.filter((item) => item.id !== postId);
    setApiData(updatedData);
  return (
    <div>
      <h3>
        {apiData.map((item) => (
          <div key={item.id}>
            <h3 className="border p-2">{item.title}</h3>
            <button
              onClick={() => handleDelete(item.id)}
              className="border-2 p-2 bg-blue-200"
            >
              Delete
            </button>
          </div>
        ))}
      </h3>
    </div>
  );
};


};
}
export default Fetchapi;
