import React, { useState } from "react";

export default function Todo() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);

  return (
    <>
      <div className="ml-96  mt-12 border-2 w-[40%] rounded-lg h-auto bg-slate-800 italic drop-shadow-2xl">
        <h1 className="text-2xl mt-24 ml-12 mb-2 text-white italic">
          Enter your Todo list:
        </h1>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Enter your list"
          className="ml-12 mb-4 border-2 rounded-md border-slate-600 border-solid p-2 w-[73%] italic"
        ></input>
        <button
          onClick={() => {
            if (activity) {
              setListData([...listData, activity]);
              setActivity("");
            }
          }}
          className="border ml-2 rounded hover:bg-red-500 italic bg-slate-600 p-2"
        >
          Add
        </button>
        {listData.length !== 0 &&
          listData.map((data, i) => {
            return (
              <div key={i} className="ml-12 mb-2">
                <div className="text-white text-x bg-slate-900 border p-2 italic w-[80%]">
                  {data}
                </div>
                <div className="mt-2">
                  {/* Remove button */}
                  <button
                    onClick={() => {
                      const newlist = listData.filter((item) => item !== data);
                      setListData(newlist);
                      // console.log(newlist, "tatata");
                    }}
                    className="rounded bg-slate-300 p-2 italic hover:bg-red-400"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}

        {/* Remove All button */}
        {listData.length >= 1 && (
          <button
            // onClick={removeAll}
            className="mt-6npm  border italic ml-12 rounded-md hover:bg-red-400 bg-slate-400 p-2 mb-12"
          >
            Remove ALL
          </button>
        )}
      </div>
    </>
  );
}
