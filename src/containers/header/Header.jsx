import React from "react";
import './header.css'
import Navbar from "../../components/navbar/NavBar";

export default function Header() {
return(
    <div className="header__div">
        <h1 className="trove-header">Trove</h1>
        <Navbar/>

    </div>
)

}