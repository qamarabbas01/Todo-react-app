import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Todo() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const removeAll = () => {
    setListData([]);
  };

  const handleAddOrEdit = () => {
    if (activity) {
      if (isEditing) {
        const updatedList = listData.map((item, index) =>
          index === currentIndex ? activity : item
        );
        setListData(updatedList);
        setIsEditing(false);
        setCurrentIndex(null);
      } else {
        setListData([...listData, activity]);
      }
      setActivity("");
    }
  };

  const handleEdit = (index) => {
    setActivity(listData[index]);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="border-2 w-[40%] rounded-lg h-auto bg-slate-800 italic drop-shadow-2xl p-6">
        <h1 className="text-2xl mb-4 text-white italic">
          Enter your Todo list:
        </h1>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter your list"
          className="mb-4 border-2 rounded-md border-slate-600 border-solid p-2 w-full italic"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddOrEdit();
            }
          }}
        ></input>
        <button
          onClick={handleAddOrEdit}
          className="border rounded hover:bg-red-500 italic bg-slate-600 p-2 w-full mb-4"
        >
          {isEditing ? "Edit" : "Add"}
        </button>
        {listData.length !== 0 &&
          listData.map((data, i) => {
            return (
              <div key={i} className="mb-2 flex items-center">
                <div className="text-white text-x bg-slate-900 border p-2 italic w-full mb-2">
                  {data}
                </div>
                <button
                  onClick={() => handleEdit(i)}
                  className="ml-2 text-blue-500"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => {
                    const newlist = listData.filter((item) => item !== data);
                    setListData(newlist);
                  }}
                  className="ml-2 text-red-500"
                >
                  <FaTrash />
                </button>
              </div>
            );
          })}

        {listData.length >= 1 && (
          <button
            onClick={removeAll}
            className="border italic rounded-md hover:bg-red-400 bg-slate-400 p-2 w-full"
          >
            Remove ALL
          </button>
        )}
      </div>
    </div>
  );
}
