import React from 'react';
import DesktopImage from "../assets/pattern-bg-desktop.png";
import MobileImage from "../assets/pattern-bg-mobile.png";
import Search from "./searchbar"
import '../header.css';

function Header() {
    return (
        <div className="header-container">
            <img src={DesktopImage} alt="Desktop Background" className="desktop-background" />
            <div className='header-text'>
                <h1 className='title-container'>IP Address Tracker</h1>
                <Search />
            </div>
        </div>
    );
}

export default Header;