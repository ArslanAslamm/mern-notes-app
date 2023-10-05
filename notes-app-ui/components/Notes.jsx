import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";

export const Notes = ({ title, desc, index, removeItem }) => {
  return (
    <div className="border-2 p-4 my-2 rounded-md">
      <div className="flex text-right justify-end gap-2">
        <Link href={`/edit-task/${index}`} className=" mt-2 text-blue-500">
          <FaEdit />
        </Link>
        <button
          className=" text-xl text-red-600 font-bold cursor-pointer"
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
