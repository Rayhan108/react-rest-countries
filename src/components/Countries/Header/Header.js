import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
             <h1>Welcome to this site</h1>
             <nav className='menu'>
                <a href="/home">Home</a><a href="/countries">countries</a><a href="/about">About</a>
             </nav>
        </div>
    );
};

export default Header;