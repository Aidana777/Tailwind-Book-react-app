import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage/AuthPage";
import BookList from "./components/BookList/BookList";
import OneCardPage from "./components/oneCardPage/OneCardPage";

const App = () => {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/:id" element={<OneCardPage />} />
        </Routes>

    </div>
  );
};

export default App;
