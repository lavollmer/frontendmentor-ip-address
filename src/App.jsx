import './App.css'
import Ipaddress from "./components/ipaddress"
import Header from "./components/header"
import Map from "./components/map"

function App() {
  return (
    <>
      <div class='desktop-background'>
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
