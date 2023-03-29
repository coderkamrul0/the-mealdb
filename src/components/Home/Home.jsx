

import React, { useState } from 'react';
import Meals from '../Meals/Meals';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {

    const [cart, setCart] = useState([]);

    const addToCart = (meal) => {
        setCart([...cart, meal]);
    };

    return (
        <div className='home'>
            <div className='meals'>
                <Meals addToCart={addToCart}></Meals>
            </div>
            <div className='sidebar'>
                <Sidebar cart={cart}></Sidebar>
            </div>
        </div>
    );
};

export default Home;
