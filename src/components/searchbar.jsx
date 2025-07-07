import React from 'react'
import Arrow from "../assets/icon-arrow.svg"
import '../header.css'

function searchbar() {
    return (
        <div className="search-container">
            <input type="text" name="search" placeholder="Search for an IP address or domain" />
            <button className="search-button">
                <img src={Arrow} alt="Search Icon"/>
            </button>
        </div>
    )
}

export default searchbar