import React from "react";
import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import CardItem from "./components/BookList/CardItem";



const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/booklist" element={<BookList />} />
        <Route path="/carditem" element={<CardItem />} />
      </Routes>

    </div>
  );
}

export default App;
