import React from 'react'
import './rating.css'
import star from '../../assets/img/star.svg'
import starHighlighted from '../../assets/img/star_highlighted.svg'

const Rating = ({ props }) => {
  let ratingArray = []

  for (let index = 0; index < props; index++) {
    ratingArray.push(
      <img
        key={'star-highlighted' + index}
        className="star-highlighted"
        src={starHighlighted}
        alt="star"
      />
    )
  }

  for (let index = props; index < 5; index++) {
    ratingArray.push(
      <img className="star" key={'star' + index} src={star} alt="star" />
    )
  }

  return <>{ratingArray}</>
}

export default Rating
