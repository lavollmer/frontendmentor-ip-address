import './App.css'
import Ipaddress from "./components/ipaddress"
import Header from "./components/header"
import Map from "./components/map"
import { useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
    axios.get('http://localhost:5000/api/hello')
    .then(res => console.log(res.data))
    .catch(err => console.error(err))
  },[])
  
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
