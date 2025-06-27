import './App.css'
import Search from "./components/searchbar"
import IpAddress from "./components/ipaddress"
import DesktopBackground from "./assets/pattern-bg-desktop.png"
import MobileBackground from "./assets/pattern-bg-mobile.png"

function App() {
  return (
    <>
      <div>
        <div className='position-relative text-center' style={{ height: '300px' }}>
          <img src={DesktopBackground} alt="Desktop Background" className='position-absolute top-0 right-0 left-0 w-100' />
          <h1 className='position-absolute w-100' style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
          }}>IP Address Tracker</h1>
        </div>
        <Search />
        <IpAddress />
      </div>
    </>
  )
}

export default App
