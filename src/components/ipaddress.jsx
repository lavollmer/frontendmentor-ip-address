
function Ipaddress({ locationData }) {
    return (
        <div className='ip-search'>
            <div className='search-box'>
                <h1>IP ADDRESS</h1>
                <h2>{locationData}</h2>
            </div>
            <div className='line'></div>
            <div className='search-box'>
                <h1>LOCATION</h1>
                <h2>{locationData}</h2>
            </div>
            <div className='line'></div>
            <div className='search-box'>
                <h1>TIMEZONE</h1>
                <h2>{locationData}</h2>
            </div>
            <div className='line'></div>
            <div className='search-box'>
                <h1>ISP</h1>
                <h2>{locationData}</h2>
            </div>
        </div>
    )
}

export default Ipaddress;