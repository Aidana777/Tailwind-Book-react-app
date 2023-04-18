import React from "react";
import data from '../../db.json'

import './BookList.css'
const BookList = () => {


  return (
    <div className='container'>
      {
        data.map(card => {
          return (
            <div className="card" key={card.id}>
              <img src={card.image} alt='' />
              <h2 className='title'>{card.name}</h2>
              <h2 className='author'>{card.Author}</h2>
              <h3 className='text_name'>{card.description}</h3>
              <p className='price'>{card.price}$</p>
              <button>Add To Card</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default BookList