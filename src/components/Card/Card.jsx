import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem(`${card.id}_count`)) || 0);
  const nav = useNavigate();
  
  const handleAdd = () => {
    nav(card.id);
    setCount(prev => {
      localStorage.setItem(`${card.id}_count`, (prev + 1).toString());
      return prev + 1;
    });
  };

  return (
    <div className="w-72 h-96 bg-white rounded-lg shadow-md p-4">
      <img src={card.image} className="w-48 h-48 mx-auto mb-4 object-cover" alt={card.name} />
      <h2 className="text-xl font-semibold mb-1">{card.name}</h2>
      <h2 className="text-gray-600 text-sm mb-2">{card.author}</h2>
      <p className="text-gray-700 text-sm mb-4">{card.description}</p>
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-800 font-semibold">${card.price}</p>
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={handleAdd}
        >
          Add To Cart ({count})
        </button>
      </div>
    </div>
  );
};

export default Card;
