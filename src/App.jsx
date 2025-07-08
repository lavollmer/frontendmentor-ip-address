import './App.css'
import Ipaddress from "./components/ipaddress"
import DesktopImage from "./assets/pattern-bg-desktop.png";
import { useState, useEffect } from 'react';
import Map from "./components/map";
import axios from 'axios';
import Arrow from "./assets/icon-arrow.svg"
import './header.css'

function App() {
  //set searchTerm state as empty string
  const [searchTerm, setSearchTerm] = useState('')
  //set location data as null
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // When the app starts, something will load
  useEffect (() => {
    handleSearch();
  },[])

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }
  // use effect to run fetchLocation when component mounts, empty dependency array runs once
  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/data?query=${searchTerm}`)
      setLocationData(response.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='desktop-background'>
        <div className="header-container">
          <img src={DesktopImage} alt="Desktop Background" className="desktop-background" />
          <div className='header-text'>
            <h1 className='title-container'>IP Address Tracker</h1>
            <div className="search-container">
              <input type="text" name="search" value={searchTerm} onChange={handleChange} placeholder="Search for an IP address or domain" />
              <button className="search-button" onClick={handleSearch}>
                <img src={Arrow} alt="Search Icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {error && <div>{error.message}</div>}
      {loading ? (
        <div>Loading ... </div>
      ) : (
        <div className='desktop-ip'>
          <Ipaddress data={locationData} />
          <Map data={locationData} />
        </div>
      )
      }
    </>
  )
}

export default App
