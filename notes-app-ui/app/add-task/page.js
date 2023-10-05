"use client";
import Link from "next/link";
import { useState } from "react";

export default function Task() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [email, setEmail] = useState("");

  const saveData = (e) => {
    var existingData = JSON.parse(localStorage.getItem("tasks")) || [];

    const newData = [
      ...existingData,
      {
        title,
        email,
        desc,
      },
    ];

    localStorage.setItem("tasks", JSON.stringify(newData));

    setTitle("");
    setDesc("");
    setEmail("");
    e.preventDefault();
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        className="flex flex-col items-center justify-center my-4 gap-4"
        onSubmit={saveData}
      >
        <input
          type="text"
          className=" focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded-md py-2 px-4 w-full"
          placeholder="Task Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          className=" focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded-md py-2 px-4 w-full"
          placeholder="Email Address Here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 rounded-md py-2 px-4 w-full"
          placeholder="Enter your text here"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>

        <div className="flex space-x-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
            disabled={!title || !desc}
            type="submit"
          >
            Submit
          </button>
          <Link
            href="/"
            className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded"
          >
            Back
          </Link>
        </div>
      </form>
    </div>
  );
}
