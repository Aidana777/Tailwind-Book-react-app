import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import BookList from "./components/BookList/BookList";
import OneCardPage from "./components/oneCardPage/OneCardPage";
import Cart from "./components/Card/Card";

const App = () => {
  // Здесь предполагается, что у вас будет массив cartItems
  const cartItems = []; // Замените это на свой код получения элементов корзины

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/booklist/:id" element={<OneCardPage />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </div>
  );
};

export default App;


