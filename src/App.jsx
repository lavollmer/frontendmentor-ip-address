import './App.css'
import Ipaddress from "./components/ipaddress"
import Header from "./components/header"

function App() {
  return (
    <>
      <div class='desktop-background'>
        <Header />
        <div className='desktop-ip'>
          <Ipaddress />
        </div>
      </div>
    </>
  )
}

export default App
