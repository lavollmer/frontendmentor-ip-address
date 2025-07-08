import React from 'react'
import {useState, useEffect} from 'react';
import Arrow from "../assets/icon-arrow.svg"
import '../header.css'

function searchbar() {
    //set usestate to empty string
    const [searchTerm, setSearchTerm] = useState('')

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        onSearch(event.target.value);
    }

      // Manage the state of location data, error, and loading
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // use effect to run fetchLocation when component mounts, empty dependency array runs once
  useEffect(() => {
    const fetchLocation = async ({searchTerm}) => {
      setLoading(true);
      try {
        // get request through axios
        // process.env.GEOLOCATION_API
        const response = await axios.get('https://geo.ipify.org/api/v2/country?apiKey=at_gVO7K7aIuD2FB8QyhWeZ5CiqXc77X&ipAddress=8.8.8.8')
        if (!response.ok){
          throw new Error ('Network response was not ok.')
        }
        const result = await response.json();
        setLocationData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchLocation();
  }, [searchTerm]);

  if (error) {
    return <div>{error.message}</div>
  }

  if (loading) return <div>Loading ...</div>;

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