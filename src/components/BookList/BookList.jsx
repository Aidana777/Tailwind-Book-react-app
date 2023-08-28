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
    <div className="flex">
      <Sidebar
        products={data}
        onSortChange={handleSortChange}
        onCheckboxChange={handleCheckboxChange}
        onReset={handleReset}
        sortAsc={sortAsc}
      />
      <div>
        <SearchBar onSearch={handleSearch} />
        <div className="grid grid-cols-3 gap-20">
          {searchResults.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookList;
