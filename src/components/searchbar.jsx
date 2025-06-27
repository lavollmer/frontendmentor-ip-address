import React from 'react'
import Arrow from "../assets/icon-arrow.svg"

function searchbar() {
    return (
        <div className="flex flex-row justify-center items-center">
            <input type="text" name="search" placeholder="Search for an IP address or domain" className="searchbar" />
            <button className="search-button">
                <img src={Arrow} alt="Search Icon" />
            </button>
        </div>
    )
}

export default searchbar