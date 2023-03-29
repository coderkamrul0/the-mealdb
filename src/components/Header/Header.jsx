import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h1 className='title'>The MealDB</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Meal</a></li>
                    <li><a href="#">Rate</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Blog</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;