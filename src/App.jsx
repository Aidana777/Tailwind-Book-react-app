import React from "react";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import { OneCardPage } from "./components/oneCardPage/OneCardPage";



const App = () => {

  return (
    <div className="App">
        <Routes>
        <Route element={<BookList /> } index/>
        <Route element={<OneCardPage/> } path='/:id' />
      </Routes>
    </div>
  );
}

export default App;
