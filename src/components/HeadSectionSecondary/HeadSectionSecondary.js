import React from 'react'
import './headsectionsecondary.css'
import img from '../../assets/img/head_about.jpg'
import imgLarger from '../../assets/img/head_about_large.jpg'

const HeadSectionSecondary = () => {
  return (
    <div>
      <picture>
        <source srcSet={imgLarger} media="(min-width: 750px)" />
        <img src={img} className="headsectionsecondary" alt="example" />
      </picture>
    </div>
  )
}

export default HeadSectionSecondary
