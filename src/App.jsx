import './App.css'
import Ipaddress from "./components/ipaddress"
import Header from "./components/header"
import Map from "./components/map"
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get(process.env.GEOLOCATION_API)
      } catch {
        setError('Error fetching locationd data.');
        console.error(err)
      }
    };
    fetchLocation();
  }, []);

  if (error) {
    return <div>{error}</div>
  }

  if (!locationData) {
    return <div>Loading locationd data...</div>;
  }

  return (
    <>
      <div class='desktop-background'>
        <Header />
        <div className='desktop-ip'>
          <Ipaddress address={{ country: {locationData.location.country }, coordinates: { locationData.latitude, locationData.longitude }, timezone: { locationData.timezone }, isp: { locationData.isp } }} />
        </div>
        <Map />
      </div>
    </>
  )
}

export default App
