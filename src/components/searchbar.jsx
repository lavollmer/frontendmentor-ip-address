import { useState, useEffect } from 'react';
import axios from 'axios';
import Arrow from "../assets/icon-arrow.svg"
import '../header.css'

function Searchbar() {
    //set usestate to empty string
    const [searchTerm, setSearchTerm] = useState('')
    // Manage the state of location data, error, and loading
    // const [locationData, setLocationData] = useState(null);
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState(true);

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }
    // use effect to run fetchLocation when component mounts, empty dependency array runs once
    const handleSearch = async() => {{
            setLoading(true);
            try {
                // get request through axios
                // process.env.GEOLOCATION_API
                const apiKey = import.meta.env.VITE_REACT_APP_KEY;
                const response = await axios.get(apiKey)
                setLocationData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        fetchLocation();
    };

    if (error) {
        return <div>{error.message}</div>
    }

    if (loading) return <div>Loading ...</div>;

    return (
        <div className="search-container">
            <input type="text" name="search" value={searchTerm} onChange={handleChange} placeholder="Search for an IP address or domain" />
            <button className="search-button" onClick={handleSearch}>
                <img src={Arrow} alt="Search Icon" />
            </button>
        </div>
    )
}

export default Searchbar