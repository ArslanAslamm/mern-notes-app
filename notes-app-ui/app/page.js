"use client";
import { Notes } from "@/components/Notes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasks"));
    if (data) {
      setItems(data);
    }
  }, []);
  const removeItem = (index) => {
    const tasksData = JSON.parse(localStorage.getItem("tasks"));
    tasksData.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasksData));
    setItems(tasksData);
  };
  return (
    <div className="max-w-12xl m-3">
      <div className="flex justify-between">
        <h1 className="items-start text-2xl font-semibold pt-3">All Tasks</h1>
        <Link
          className="border-1 bg-black text-white rounded-md px-5 py-3 items-end"
          href="/add-task"
        >
          Add New
        </Link>
      </div>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-3">
        {items &&
          items.map((item, key) => {
            return (
              <Notes
                title={item.title}
                desc={item.desc}
                index={key}
                removeItem={removeItem}
              />
            );
          })}
      </div>
    </div>
  );
}
