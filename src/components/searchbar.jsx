import React from 'react'
import {useState} from 'react';
import Arrow from "../assets/icon-arrow.svg"
import '../header.css'

function searchbar() {
    //set usestate to empty string
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }

    return (
        <div className="search-container">
            <input type="text" name="search" value={searchTerm} onChange={handleChange} placeholder="Search for an IP address or domain" />
            <button className="search-button">
                <img src={Arrow} alt="Search Icon" />
            </button>
        </div>
    )
}

export default searchbar