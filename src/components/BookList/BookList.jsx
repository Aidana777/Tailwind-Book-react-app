import React from "react";
import data from '../../db.json'
import { Card } from '../Card/Card'
const BookList = () => {
  return (
    <div className="grid grid-cols-3 gap-20">
      {
        data.map(card => <Card key={card.id} card={card} />)
      }
    </div>
  )
}

export default BookList