import React from "react";
import './navbar.css'
export default function Navbar() {
    return (
        <div>
    <nav className="navbar__container">

        <div className="navbar__div">
            <ul>
            <a href="#" className="navbar__div-link">Premium</a>
            <a href="#" className="navbar__div-link">Support</a>
            <a href="#" className="navbar__div-link">Download</a>
            </ul>
        </div>

    </nav>
        </div>
    )
}