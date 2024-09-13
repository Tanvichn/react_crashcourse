import React from "react";
import logo from '../media/logo192.png';
import './navbar.css';

const Navbar = () => {
    return ( <nav className="nav">
        <img src = {logo} alt = 'Logo' className = 'navbar-logo' style={{ height: '50px', marginRight: '20px' }}/>
        <ul className = 'nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <h1>Website</h1>
        
    </nav>)
};



export default Navbar;