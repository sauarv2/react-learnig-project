import { useState } from "react";

function bg() {
  const [color, setColor] = useState("green");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div
          className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-3 
    rounded-xl mx-2"
        >
          <button
            onClick={() => {
              setColor("red");
            }}
            className="bg-red-500 px-1 py-1 rounded-lg text-white"
          >
            Red
          </button>
        </div>{" "}
        <div
          className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-3 
    rounded-xl mx-2"
        >
          <button
            onClick={() => {
              setColor("white");
            }}
            className="bg-black px-1 py-1 rounded-lg text-white"
          >
            white
          </button>
        </div>{" "}
        <div
          className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-3 
    rounded-xl mx-2"
        >
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="bg-yellow-500 px-1 py-1 rounded-lg text-white"
          >
            yellow
          </button>
        </div>{" "}
        <div
          className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-3 
    rounded-xl mx-2"
        >
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="bg-blue-500 px-1 py-1 rounded-lg text-white"
          >
            Blue
          </button>
        </div>{" "}
        <div
          className="flex flex-wrap justify-center gap-2 shadow-xl bg-white px-3 py-3 
    rounded-xl mx-2"
        >
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="bg-orange-500 px-1 py-1 rounded-lg text-white"
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default bg;
