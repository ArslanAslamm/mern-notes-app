import React from "react";

export const Alert = ({ type, message }) => {
  let resultMessage = "";
  let messageType = "";

  if (type === "save") {
    resultMessage =
      message === "error"
        ? "Error occurred while saving data."
        : "Data saved successfully.";
    messageType = message === "error" ? "Error!" : "Success!";
  } else if (type === "update") {
    resultMessage =
      message === "error"
        ? "Error occurred while updating data."
        : "Data updated successfully.";
    messageType = message === "error" ? "Error!" : "Success!";
  } else if (type === "delete") {
    resultMessage =
      message === "error"
        ? "Error occurred while deleting data."
        : "Data deleted successfully.";
    messageType = message === "error" ? "Error!" : "Success!";
  } else {
    resultMessage = "Invalid type specified.";
    messageType = "Error!";
  }
  return (
    <div
      className={`px-4 py-5 ${
        message === "error" ? "bg-red-600" : "bg-green-600"
      } text-2xl text-white rounded-md my-3`}
    >
      <span className="font-bold">{messageType}</span> {resultMessage}
    </div>
  );
};
