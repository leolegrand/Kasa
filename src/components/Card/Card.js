import './card.css'
import { useFetch } from '../../utils/hooks/useFetch'

function Card() {
  const { data } = useFetch('data.json')

  // Data fetched are converted from object to array so we can access the map method
  const arrOfData = []
  Object.keys(data).forEach((key) => {
    arrOfData.push(data[key])
  })

  return arrOfData.map((i) => (
    <a
      href="#"
      className="card"
      style={{ backgroundImage: `url(${i.cover})` }}
      key={i.id}
    >
      <h2>{i.title}</h2>
    </a>
  ))
}

export default Card
