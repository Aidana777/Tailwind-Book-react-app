import { useParams } from "react-router-dom"

export const OneCardPage = () => {
  const { id } = useParams()
  const count = localStorage.getItem(`${id}_count`)
  return (



    <div>{count}</div>

  )
}
