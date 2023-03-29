import React, { useState } from 'react';
import Meals from '../Meals/Meals';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'



const Home = () => {

    const [meal,setMeal] = useState([])

    const addToCart = (meal) =>{
        setMeal(meal)
    }

    return (
        <div className='home'>
            <div className='meals'>
                <Meals addToCart={addToCart}></Meals>
            </div>
            <div className='sidebar'>
                <Sidebar meal={meal}></Sidebar>
            </div>
        </div>
    );
};

export default Home;