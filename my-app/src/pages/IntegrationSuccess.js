import React from "react";
import { useNavigate } from "react-router-dom";

function IntegrationSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50">
      <h1 className="text-4xl font-bold text-green-600 mb-6">Integration Successful 🎉</h1>
      <p className="text-lg text-gray-700 mb-4">Your chatbot has been successfully integrated.</p>
      <button
        onClick={() => navigate("/")}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Explore Admin Panel
      </button>
      <button
        onClick={() => alert("Chatbot launched!")}
        className="bg-green-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-green-700"
      >
        Start Talking to Your Chatbot
      </button>
    </div>
  );
}

export default IntegrationSuccess;
