

import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {
    const { cart } = props;

    return (
        <div className='side'>
            <h1>Sidebar</h1>

            {cart.map((meal, index) => (
                <div key={index} className='sideFlex'>
                    <div>
                        <img className='sideImg' src={meal.strMealThumb} alt="" />
                    </div>
                    <h4>{meal.strMeal}</h4>
                    <p>{meal.strCategory}</p>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
