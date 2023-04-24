import React from "react";
// import { Route, Routes } from "react-router-dom";
import BookList from "./components/BookList/BookList";

import Navbar from './pages/Navbar'



const App = () => {

  return (
    <div className="App">
      <Navbar />
      
        <BookList />
    

    </div>
  );
}

export default App;
