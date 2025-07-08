import './App.css'
import Ipaddress from "./components/ipaddress"
import Header from "./components/header"
import Map from "./components/map"
import { useState} from 'react';
import axios from 'axios';

function App() {
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
