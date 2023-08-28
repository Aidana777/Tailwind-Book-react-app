import React, { useState } from "react";
import data from "../../db.json";
import Card from "../Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import Sidebar from "../Sidebar/Sidebar";

const BookList = () => {
  const [searchResults, setSearchResults] = useState(data);
  const [sortAsc, setSortAsc] = useState(true);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const handleSearch = (searchText) => {
    const results = data.filter((card) =>
      card.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSortChange = () => {
    setSortAsc(!sortAsc);
    const sortedResults = [...searchResults].sort((a, b) => {
      if (sortAsc) {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setSearchResults(sortedResults);
  };
  
  const handleCheckboxChange = () => {
    setShowOnlyAvailable(!showOnlyAvailable);
  
    if (!showOnlyAvailable) {
      const availableResults = searchResults.filter((card) => card.available);
      setSearchResults(availableResults);
    } else {
      setSearchResults(data);
    }
  };
  
  const handleReset = () => {
    setSearchResults(data);
    setSortAsc(true);
    setShowOnlyAvailable(false);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <Sidebar
        products={data}
        onSortChange={handleSortChange}
        onCheckboxChange={handleCheckboxChange}
        onReset={handleReset}
        sortAsc={sortAsc}
      />
      <div className="mt-6 md:mt-0 md:ml-10">
        <SearchBar onSearch={handleSearch} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:gap-10">
          {searchResults.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
