import './App.css'
import Search from "./components/searchbar"
import IpAddress from "./components/ipaddress"
import DesktopBackground from "./assets/images/pattern-bg-desktop.png"
import MobileBackground from "./assets/images/pattern-bg-mobile.png"

function App() {
  return (
    <>
      <div>
        <img src={DesktopBackground} alt="Desktop Background" />
        <img src={MobileBackground} alt="Mobile Background"/>
        <Search />
        <IpAddress />
      </div>
    </>
  )
}

export default App
