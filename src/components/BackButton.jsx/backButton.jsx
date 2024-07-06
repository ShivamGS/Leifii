// src/components/BackButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center bg-gradient-to-r from-blue-600 to-blue-900 text-white py-2 px-6 rounded-full shadow-lg hover:from-blue-900 hover:to-blue-400  transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
      onClick={() => navigate(-1)}
    >
      <ArrowLeftIcon className="h-5 w-5 mr-2" />
      Back
    </button>
  );
};

export default BackButton;
