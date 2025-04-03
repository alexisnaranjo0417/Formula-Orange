import "../css/DriverCard.css"

function DriverCard({driver}) {

    return <div className="driver-card">
        <div>
            <h3>{driver.driver_number}</h3>
            <h3>{driver.country_code || "N/A"}</h3>
            <h3>{driver.team_name }</h3>
        </div>
        <div className="driver-poster">
            <img src={driver.headshot_url} alt={driver.full_name} />
        </div>
        <div className="driver-info">
            <h3>{driver.full_name }</h3>
        </div>
    </div>
}

export default DriverCard