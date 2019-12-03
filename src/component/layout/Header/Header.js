import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar'
import './Header.scss'

const Header = () => {
    return (
        <div className="header-wrapper">
            <div>
                <Logo />
            </div>
            <div className="header">
                <Navbar />
            </div>
        </div>
    );
};

export default Header;