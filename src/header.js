import React from "react"
import PinusBarLogo from './images/PinusBarLogo.png'
import './header.css';

const Header = () => {
    return (
        <div class='header'>
            <img class='header_logo' src={PinusBarLogo} alt='title'></img>
            <ul></ul>
            <h3 class='header_text'>Cardápio</h3>
        </div>
    )
}

export default Header;
