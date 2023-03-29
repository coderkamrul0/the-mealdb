import React from 'react';
import Meals from '../Meals/Meals';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className='meals'>
                <Meals></Meals>
            </div>
            <div className='sidebar'>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Home;