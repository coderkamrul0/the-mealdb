import React from 'react';
import './meal.css'

const Meal = (props) => {
    const {strMeal,strMealThumb,strInstructions,strCategory,strArea} = props.meal
    return (
        <div className='mealContainer'>
            <div className='img'>
                <img src={strMealThumb} alt="" />
                <h3>{strMeal}</h3>
                <p><span>Description:</span> {strInstructions.slice(0,120)}...</p>
                <div className='categoryArea'>
                    <p>Category: {strCategory}</p>
                    <p>Area: {strArea}</p>
                </div>
                <button onClick={()=>props.addToCart(props.meal)}>Add To Cart</button>

            </div>
        </div>
    );
};

export default Meal;