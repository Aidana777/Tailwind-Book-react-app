import React from "react";
import data from '../../db.json'
import './BookList.css'
import { Card } from "../Card/Card";
const BookList = () => {
  return (
    <div className='container'>
      {
        data.map(card => <Card key={card.id} card={card}/>)
      }
    </div>
  )
}

export default BookList