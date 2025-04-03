import { useState, useEffect } from "react";
import DriverCard from "../components/DriverCard";
import "../css/Home.css"
import { getDrivers } from "../services/api";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [drivers, setDrivers] = useState([]);
    const [error, setError] = useState([null]);
    const [loading, setLoading] = useState([true]);

    useEffect(() => {
        const loadDrivers = async () => {
            try {
                const drivers = await getDrivers();
                setDrivers(drivers);
            } catch (err) {
                setError("Failed to load Drivers...");
            }
            finally {
                setLoading(false);
            }
        }
        loadDrivers();
    }, []);

    const hadleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
         <div className="home">
            <form onSubmit={hadleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search" 
                    className="search-input" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="driver-grid">
                {drivers
                    .filter(driver => 
                        searchQuery === "" || 
                        driver.full_name.toLowerCase().startsWith(searchQuery)
                    )
                    .map(driver => (
                        <DriverCard driver={driver} key={driver.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home