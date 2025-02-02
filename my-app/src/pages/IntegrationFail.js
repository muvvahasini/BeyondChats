import React from "react";
import { useNavigate } from "react-router-dom";

function IntegrationFail() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-red-50">
      <h1 className="text-4xl font-bold text-red-600 mb-6">Integration Failed 😢</h1>
      <p className="text-lg text-gray-700 mb-4">Something went wrong. Please try again.</p>
      <button
        onClick={() => navigate("/chatbot-integration")}
        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
      >
        Retry Integration
      </button>
    </div>
  );
}

export default IntegrationFail;
