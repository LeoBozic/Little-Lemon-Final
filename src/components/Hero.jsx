import React from 'react'
import RestaurantFood from '../assets/restaurantfood.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="container">
        <div className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>Little lemon is small family restaurant with great food that everyone like.</p>
          <button><Link to="booking">Reserve a table</Link></button>
        </div>
        <img src={RestaurantFood}  alt="Little Lemon Restaurant Food" />
      </div>
    </section>
  )
}

export default Hero