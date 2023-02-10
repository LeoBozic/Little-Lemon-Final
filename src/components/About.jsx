import React from 'react'
import RestaurantImage from '../assets/restaurant.jpg'
import ChefsImage from '../assets/chefs.jpg'

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="content">
          <h2>About</h2>
          <p>Little lemon is small family restaurant with great food that everyone like.</p>
        </div>
        <div className="image-container">
          <img src={ChefsImage} alt="Little Lemon Restaurant" />
          <img src={RestaurantImage} alt="Little Lemon Restaurant Chefs" />
        </div>
      </div>
    </section>
  )
}

export default About