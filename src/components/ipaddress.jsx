
function Ipaddress({ locationData }) {
    if (
        !locationData ||
        !locationData.location ||
        !locationData.isp) {
        return <div>Loading ...</div>
    }

    console.log(locationData);

    return (
        <div className='ip-search'>
            <div className='search-box'>
                <h1>IP ADDRESS</h1>
                <h2>{locationData.ip}</h2>
            </div>
            <div className='line'></div>
            <div className='search-box'>
                <h1>LOCATION</h1>
                <h2>{locationData.location.city}</h2>
            </div>
            <div className='line'></div>
            <div className='search-box'>
                <h1>TIMEZONE</h1>
                <h2>{locationData.location.timezone}</h2>
            </div>
            <div className='line'></div>
            <div className='search-box'>
                <h1>ISP</h1>
                <h2>{locationData.isp}</h2>
            </div>
        </div>
    )
}

export default Ipaddress;