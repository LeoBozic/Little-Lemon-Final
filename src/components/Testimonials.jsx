import React from 'react'
import Testimonial from './Testimonial'
import Person1 from '../assets/user1.jpg'
import Person2 from '../assets/user2.jpg'
import Person3 from '../assets/user3.jpg'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div>
          <Testimonial image={Person1} name="Harisson Daniels" rating="5.0" testimonial="Better than when my mom makes it :)" />
          <Testimonial image={Person2} name="Anna Weathers" rating="4.7" testimonial="Not bad but Greek salad would be better with more peppers." />
          <Testimonial image={Person3} name="Victor Jackson" rating="4.9" testimonial="Great restaurant everyone should visit it." />
        </div>
      </div>
    </section>
  )
}

export default Testimonials