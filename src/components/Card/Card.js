import './card.css'
import { useFetch } from '../../utils/hooks/useFetch'
import { NavLink } from 'react-router-dom'

function Card() {
  const { data } = useFetch('data.json')

  // Data fetched are converted from object to array so we can access the map method
  const arrOfData = []
  Object.keys(data).forEach((key) => {
    arrOfData.push(data[key])
  })

  return arrOfData.map((i, index) => (
    <NavLink to={'/product=' + i.id} className="card" key={index}>
      <img className="card__img" src={i.cover} alt="" />
      <h2 className="card__title">{i.title}</h2>
    </NavLink>
  ))
}

export default Card
