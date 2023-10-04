import React from "react";

export const Notes = ({ title, desc, index, removeItem }) => {
  return (
    <div className="border-2 p-4 my-2 rounded-md">
      <div className=" text-right justify-end">
        <button
          className=" text-xl text-black font-bold cursor-pointer"
          onClick={() => removeItem(index)}
        >
          x
        </button>
      </div>
      <div className="text-2xl font-bold">{title}</div>
      <div className="text-xl">{desc}</div>
    </div>
  );
};
