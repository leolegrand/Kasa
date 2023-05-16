import React from 'react'
import Rating from '../Rating/Rating'
import './productinformations.css'
import Summary from '../Summary/Summary'

const ProductInformations = ({ props }) => {
  const fullName = props.host.name
  const [last, first] = fullName.split(' ')

  return (
    <div className="product">
      <div className="product-header">
        <div className="product-informations">
          <h2 className="product__title">{props.title}</h2>
          <h3 className="product__location">{props.location}</h3>
          <ul className="product__tags">
            {props.tags.map((i, index) => (
              <li className="product__tag" key={index}>
                {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="product-host">
          <div className="product-host__profile">
            <img
              src={props.host.picture}
              className="product-host__picture"
              alt={'picture of ' + props.host.name}
            />
            <div className="product-host__name">
              <h2>{last}</h2>
              <h2>{first}</h2>
            </div>
          </div>

          <div className="product-host__rating">
            <Rating props={props.rating} />
          </div>
        </div>
      </div>
      <div className="dropdown-parent">
        <Summary props={props.description} title={'Description'} />
        <Summary props={props.equipments} title={'Equipements'} />
      </div>
    </div>
  )
}

export default ProductInformations
