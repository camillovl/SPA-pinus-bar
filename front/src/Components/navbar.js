import React from "react";
import "../Styling/navbar.css"

const Navbar = () => {
    return(
        <nav className="nav">
            <ul>
                <li>
                    <a href="/"  className="mainpage_title">Pinus Bar</a>
                </li>    
            </ul>
            <ul>
                <li className="active">
                    <a href="/login">Log in</a>
                </li>
                <li className="active">
                    <a href="/sacola" id='sacola'>Sacola</a>
                </li>                
            </ul>
        </nav>
    )
}

export default Navbar;