import React, { useState } from 'react'
import './slider.css'
import chevron from '../../assets/img/chevron.svg'

const Slider = ({ props }) => {
  let [index, setIndex] = useState(0)

  const sliderNext = () => {
    if (index === props.length - 1) {
      setIndex(0)
    } else {
      setIndex(index + 1)
    }
  }

  const sliderPrev = () => {
    if (index === 0) {
      setIndex(props.length - 1)
    } else {
      setIndex(index - 1)
    }
  }

  if (props.length === 1) {
    return (
      <div className="slider">
        <img className="slider__img" src={props[index]} alt={props} />
      </div>
    )
  } else {
    return (
      <div className="slider">
        <img
          src={chevron}
          onClick={sliderNext}
          className="chevron-next chevron-slider"
          alt=""
        />
        <img
          src={chevron}
          onClick={sliderPrev}
          className="chevron-prev chevron-slider"
          alt=""
        />
        <span className='slider__count'>{index+1}/{props.length}</span>
        <img className="slider__img" src={props[index]} alt={props} />
      </div>
    )
  }
}

export default Slider
