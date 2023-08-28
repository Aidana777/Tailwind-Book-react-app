import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import BookList from "./components/BookList/BookList";
import OneCardPage from "./components/oneCardPage/OneCardPage";
import Cart from "./components/Card/Card";

const App = () => {
  
  const cartItems = []; 

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
