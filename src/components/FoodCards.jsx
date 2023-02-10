import React from 'react'
import GreekSalad from '../assets/greeksalad.jpg'
import Bruchetta from '../assets/bruchetta.jpg'
import LemonDessert from '../assets/lemondessert.jpg'
import FoodCard from './FoodCard'

const FoodCards = () => {
  return (
    <div className='foodcards'>
        <FoodCard image={GreekSalad} itemname="Greek Salad" price="$12.99" description="The famous greek salad of crispy lettuces, peppers, olives and our Chicago style feta cheese, granished with crunchy garlic and rosemary croutons." />
        <FoodCard image={Bruchetta} itemname="Bruschetta" price="$5.99" description="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." />
        <FoodCard image={LemonDessert} itemname="Limoncello Cake" price="$5.00" description="This comes straight from grandma's recipe book, every last ingredient has been sourcedand is as authentic as can be imagined." />
    </div>
  )
}

export default FoodCards