import React from 'react';
import { NavLink } from 'react-router-dom';

const MLayOut = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=>isActive?"active-item":"inactive-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"inactive-item"} to="/Income">Income</NavLink></li>
                <li><NavLink className={({isActive})=>isActive?"active-item":"inactive-item"} to="/Expense">Expense</NavLink></li>

            </ul>
        </div>
    );
};

export default MLayOut;