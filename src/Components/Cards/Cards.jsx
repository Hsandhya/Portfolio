import React from 'react'
import './Cards.css'

const Cards = ({emoji,heading,detail}) => {
  return (
    <div className='card'>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>

    <button className="button">Learn more</button>
    </div>
  )
}

export default Cards
