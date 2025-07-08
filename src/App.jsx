import './App.css'
import Ipaddress from "./components/ipaddress"
import Header from "./components/header"
import Map from "./components/map"
import {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';

function App() {
  const [country, setCountry] = useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
  },[{searchTerm}])

  return (
    <>
      <div className='desktop-background'>
        <Header />
        <div className='desktop-ip'>
          <Ipaddress />
        </div>
        <Map />
      </div>
    </>
  )
}

export default App
