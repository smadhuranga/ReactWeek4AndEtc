import './Navbar.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/8_1sasa11.png";


export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">

                    <img src={logo} alt="Logo" id="logo" />
                    <span className="logo-text">Organic Shop</span>

                </div>


                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                   <li>
                       <Link className="nav-item" to="/">Home</Link>
                   </li>
                    <li>
                        <Link className="nav-item" to="/about">About</Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/contact">Contact</Link>
                    </li>
                </div>

                <button className="cta-button">
                    <Link to="/login" className="cta-button-text">Sign in</Link>
                </button>

                <div
                    className="hamburger"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
                    <span className={`bar ${isMenuOpen ? 'animate' : ''}`}></span>
                </div>
            </div>
        </nav>
    );
}