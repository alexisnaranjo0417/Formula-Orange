import {Link} from "react-router-dom";
import "../css/NavBar.css"
function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Formula Orange</Link>
            </div>
            <div className="logo" ></div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/teams" className="nav-link">Teams</Link>
            </div>
        </nav>
    )
}

export default NavBar