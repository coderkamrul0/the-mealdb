import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = ({addToCart}) => {
    
    const [meal, setMeal] = useState([]);

    const [message, setMessage] = useState('');

    const [updated, setUpdated] = useState(message);

    useEffect(() => {
        if (updated) {
            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${updated}`)
                .then(res => res.json())
                .then(data => setMeal(data.meals))
                .catch(error => console.error(error));
        }
    }, [updated]);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        setUpdated(message);
        setMessage('');
    };

    return (
        <div>
            <h1>Meals</h1>
            <div className='searchField'>
                <input 
                    type="search" 
                    id="message"
                    name="message"
                    onChange={handleChange}
                    value={message}
                />
                <button onClick={handleClick}>Search</button>
            </div>
            <div className='singleMeal'>
                {
                    meal.map(singleMeal => <Meal meal={singleMeal} key={singleMeal.idMeal} addToCart={addToCart}></Meal>)
                }
            </div>
        </div>
    );
};

export default Meals;