
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
                <p>{locationData.ip}</p>
            </div>
            <div className='line'></div>
            <div className='search-box'>
                <h1>LOCATION</h1>
                <p>{locationData.location.city}</p>
            </div>
            <div className='line'></div>
            <div className='search-box'>
                <h1>TIMEZONE</h1>
                <p>{locationData.location.timezone}</p>
            </div>
            <div className='line'></div>
            <div className='search-box'>
                <h1>ISP</h1>
                <p>{locationData.isp}</p>
            </div>
        </div>
    )
}

export default Ipaddress;