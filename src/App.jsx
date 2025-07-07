import './App.css'
import Ipaddress from "./components/ipaddress"
import Header from "./components/header"
import Map from "./components/map"
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  // Manage the state of location data, error, and loading
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // use effect to run fetchLocation when component mounts, empty dependency array runs once
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        // get request through axios
        // process.env.GEOLOCATION_API
        const API = process.env.GEOLOCATION_API
        const response = await axios.get('API')
        setLocationData(response.data);
      } catch (err) {
        setError('Error fetching location data.');
      } finally {
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  if (error) {
    return <div>{error.message}</div>
  }

  if (loading) return <div>Loading ...</div>;

  return (
    <>
      <div className='desktop-background'>
        <Header />
        <div className='desktop-ip'>
          <Ipaddress address />
        </div>
        <div>
          {JSON.stringify(locationData)}
        </div>
        <Map />
      </div>
    </>
  )
}

export default App
