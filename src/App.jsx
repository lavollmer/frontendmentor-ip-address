import './App.css'
import DesktopImage from "./assets/pattern-bg-desktop.png";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Arrow from "./assets/icon-arrow.svg"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function App() {
  //set searchTerm state as empty string
  const [searchTerm, setSearchTerm] = useState('')
  //set location data as null
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState([32.69922, -117.11281]);

  // When the app starts, something will load
  useEffect(() => {
    if (searchTerm) handleSearch();
  }, [])

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
  }
  // use effect to run fetchLocation when component mounts, empty dependency array runs once
  const handleSearch = async () => {
    setLoading(true);
    try {
      const query = searchTerm || '8.8.8.8'
      const response = await axios.get(`http://localhost:5000/api/data?query=${query}`);
      console.log(response.data);
      setLocationData(response.data);
      setPosition([response.data.location.lat, response.data.location.lng]);
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
            <h1 className='title-container font-bold'>IP Address Tracker</h1>
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
          <div className='ip-search'>
            <div className='search-box'>
              <h1>IP ADDRESS</h1>
              <p>{locationData?.ip ?? 'Loading ..'}</p>
            </div>
            <div className='line'></div>
            <div className='search-box'>
              <h1>LOCATION</h1>
              <p>{locationData?.location?.city ?? 'Loading ..'}</p>
            </div>
            <div className='line'></div>
            <div className='search-box'>
              <h1>TIMEZONE</h1>
              <p>{locationData?.location?.timezone ?? 'Loading...'}</p>
            </div>
            <div className='line'></div>
            <div className='search-box'>
              <h1>ISP</h1>
              <p>{locationData?.isp ?? 'Loading..'}</p>
            </div>
          </div>
          {/* Leaflet Map */}
          <div className='leaflet-container'>
            {/* Map Container taking center coordinates and zoom level as props */}
            <MapContainer center={position} zoom={13}>
              {/* Tile layer specifies the tile server */}
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {/* marker adds specific location */}
              <Marker position={position}>
                {/* Displays marker when popup is selected */}
                <Popup>
                  <h1>Hello</h1>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      )
      }
    </>
  )
}

export default App
