import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../../db.json";

const OneCardPage = () => {
  const { id } = useParams();
  const card = data.find((item) => item.id === id);
  const storedCount = localStorage.getItem(`${id}_count`);
  const initialCount = storedCount ? parseInt(storedCount) : 0;
  const [count, setCount] = useState(initialCount);

  const navigate = useNavigate();

  if (!card) {
    return <div>Карточка не найдена</div>;
  }

  const totalPrice = card.price * count;

  const handleDelete = () => {
    try {
      localStorage.removeItem(`${id}_count`);
      console.log("Позиция удалена:", id);
      navigate("/booklist");
    } catch (error) {
      console.error("Ошибка удаления позиции:", error);
    }
  };

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    localStorage.setItem(`${id}_count`, newCount.toString());
  };

  const decreaseCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      localStorage.setItem(`${id}_count`, newCount.toString());
    } else if (count === 1) {
      setCount(0);
      localStorage.setItem(`${id}_count`, "0");
    } else {
      try {
        localStorage.removeItem(`${id}_count`);
        console.log("Item deleted:", id);
        navigate("/booklist");
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <div className="flex">
      <div className="w-full p-4 lg:w-3/4 lg:p-8">
        <img
          src={card.image}
          className="w-48 h-48 bg-center cursor-pointer bg-no-repeat bg-cover mx-auto mb-4"
          alt=""
        />
        <h2 className="text-2xl font-semibold mb-2">{card.name}</h2>
        <h2 className="text-base text-gray-600 mb-2">{card.Author}</h2>
        <p className="text-gray-700 mb-4">{card.description}</p>
        <div className="mb-4">
          <span className="font-semibold">Count:</span> {count}
        </div>
        <div className="mb-4">
          <span className="font-semibold">Total Price:</span> ${totalPrice}
        </div>
        <div className="flex flex-col space-y-2 mt-4">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300 transform hover:scale-105"
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            onClick={increaseCount}
          >
            Increase Count
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            onClick={decreaseCount}
          >
            Decrease Count
          </button>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 transform hover:scale-105"
          onClick={() => navigate(-1)} 
        >
          Назад
        </button>
      </div>
    </div>
  );
};

export default OneCardPage;

