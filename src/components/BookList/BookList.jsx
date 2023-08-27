import React, { useState } from "react";
import data from '../../db.json'
import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';

const BookList = () => {
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (searchText) => {
    const results = data.filter(card => card.name.toLowerCase().includes(searchText.toLowerCase()));
    setSearchResults(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-3 gap-20">
        {searchResults.map(card => <Card key={card.id} card={card} />)}
      </div>
    </div>
  )
}

export default BookList;
