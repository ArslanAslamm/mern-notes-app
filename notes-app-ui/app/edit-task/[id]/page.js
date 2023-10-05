"use client";
import Link from "next/link";
import { useState } from "react";
import { Alert } from "@/components/Alert";

export default function Task({ params }) {
  var oldData = JSON.parse(localStorage.getItem("tasks")) || [];
  var oldIndexData = oldData[params.id];

  const [title, setTitle] = useState(oldIndexData.title);
  const [email, setEmail] = useState(oldIndexData.email);
  const [desc, setDesc] = useState(oldIndexData.desc);
  const [showMessage, setShowMessage] = useState(false);

  const updateData = (e) => {
    var existingData = JSON.parse(localStorage.getItem("tasks")) || [];

    var existingIndex = existingData[params.id];
    existingIndex.title = title;
    existingIndex.email = email;
    existingIndex.desc = desc;

    existingData[params.id] = existingIndex;

    localStorage.setItem("tasks", JSON.stringify(existingData));

    setTitle(title);
    setDesc(desc);
    setEmail(email);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    e.preventDefault();
  };

  return (
    <div className="max-w-2xl mx-auto">
      {showMessage && <Alert message="success" type="update" />}
      <form
        className="flex flex-col items-center justify-center my-4 gap-4"
        onSubmit={updateData}
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
          placeholder="Email Here"
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
            disabled={!title || !desc || !email}
            type="submit"
          >
            Update
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
