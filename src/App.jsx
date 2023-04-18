import React from "react";
import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList/BookList";
import CardItem from "./components/BookList/CardItem";
import Navbar from './pages/Navbar'



const App = () => {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/booklist" element={<BookList />} />
        <Route path="/carditem" element={<CardItem />} />
      </Routes>

    </div>
  );
}

export default App;
