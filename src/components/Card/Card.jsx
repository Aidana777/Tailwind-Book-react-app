import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Card = ({ card }) => {
  const [count, setCount] = useState(JSON.parse(localStorage.getItem(`${card.id}_count`)) || 0)
  const nav = useNavigate()
  const handleAdd = () => {
    nav(card.id)
    setCount(prev => {
      localStorage.setItem(`${card.id}_count`, prev + 1)
      return prev + 1
    })
  }

  const removeItem = () => {
    nav(card.id)
    setCount(prev => {
      localStorage.setItem(`${card.id}_count`, prev - 1)
      return prev - 1
    })
  }

  return (
    <div className="card" >
      <img src={card.image} alt='' />
      <h2 className='title'>{card.name}</h2>
      <h2 className='author'>{card.Author}</h2>
      <h3 className='text_name'>{card.description}</h3>
      <p className='price'>{card.price}$</p>
      <button onClick={handleAdd}>Add To Card ( {count} )</button>
      <button onClick={removeItem}>Remove</button>
    </div>
  )
}
