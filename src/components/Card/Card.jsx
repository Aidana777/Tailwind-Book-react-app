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
    <div className="w-[300px] h-[400px]" >
      <img src={card.image} className="w-[200px] h-[200px] bg-center cursor-pointer bg-no-repeat bg-cover" alt='' />
      <h2 className='title'>{card.name}</h2>
      <h2 className='author'>{card.Author}</h2>
      <h3 className='text_name'>{card.description}</h3>
      <p className='price'>{card.price}$</p>
      <button className="w-[130px] h-[40px]  bg-blue-200" onClick={handleAdd}>Add To Card ( {count} )</button>
    
    </div>
  )
}
