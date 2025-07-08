import './App.css'
import Ipaddress from "./components/ipaddress"
import Header from "./components/header"
import Map from "./components/map"
import { useState, useEffect } from 'react';
import axios from 'axios';

function App({searchTerm}) {
  // Manage the state of location data, error, and loading
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // use effect to run fetchLocation when component mounts, empty dependency array runs once
  useEffect(() => {
    const fetchLocation = async () => {
      setLoading(true);
      try {
        // get request through axios
        // process.env.GEOLOCATION_API
        const response = await axios.get(process.env.GEOLOCATION_API)
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
    <>
      <div className='desktop-background'>
        <Header />
        <div className='desktop-ip'>
          <Ipaddress />
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
