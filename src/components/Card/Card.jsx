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
    <div className="w-full max-w-xs mx-auto bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105">
      <img src={card.image} className="w-full h-48 object-cover" alt={card.name} />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1">{card.name}</h2>
        <h2 className="text-gray-600 text-sm mb-2">{card.author}</h2>
        <p className="text-gray-700 text-sm mb-4">{card.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-800 font-semibold">${card.price}</p>
          <button
            className="px-4 py-2 ml-[10px] bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            onClick={handleAdd}
          >
            Добавить в корзину ({count})
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
