import React from "react";

function Card({ title, content, actions }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <div>{actions}</div>
    </div>
  );
}

export default Card;
