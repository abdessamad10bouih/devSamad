import { Check, Save, SaveAll } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

const Cards = ({ colors, clickedFun, tab }) => {
  const [page, setPage] = useState(tab);

  const handleClick = (color) => {
    navigator.clipboard.writeText(color); // Directly use the color from the argument
    toast.success("Copied");
  };

  return (
    <div className="w-[30%] sm:w-full h-[40vh] rounded-md shadow border flex flex-col">
      <div className="w-full h-[80%] flex">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(color)} // Pass the color directly to handleClick
            className="w-[25%] p-1 h-full relative cursor-pointer"
            style={{ backgroundColor: color }}
          >
            <h1 className="text-white">{color}</h1> {/* Remove the ref */}
          </div>
        ))}
      </div>
      <div className="w-full h-[20%] flex items-center justify-between px-5 ">
        <h1 className="font-bold">Click on any color to copy</h1>
        {tab === "all" ? (
          <div className="w-[20%] h-full flex flex-col gap-1 items-center justify-center">
            <SaveAll className="cursor-pointer" onClick={clickedFun} />
            <h1 className="text-xs text-teal-500">Save palette</h1>
          </div>
        ) : (
          <div className="w-[20%] h-full flex flex-col items-center justify-center">
            <Check />
            <h1 className="text-teal-500">Saved</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
