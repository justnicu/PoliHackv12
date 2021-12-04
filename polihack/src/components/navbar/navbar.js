import React, { useState } from 'react'
import "./navbar.css"

export default function NavBar(){
    const [activeButton, setActiveButton] = useState(0);

    return (
        <nav>
            <div className="navbar-elements">
                <div className="navbar-left">
                    <div className="logo-div"><p>LOGO</p></div>
                    <a href="#home" onClick={()=> setActiveButton(0)} className={activeButton == 0 ? "nav-element-active" : ""}>Home</a>
                    <a href="#products" onClick={()=> setActiveButton(1)} className={activeButton == 1 ? "nav-element-active" : ""}>Products</a>
                </div>
                <div className="navbar-right">
                    <a href="#login" onClick={()=> setActiveButton(2)} className={activeButton == 2 ? "nav-element-active" : ""}>Login</a>
                    <a href="#register" onClick={()=> setActiveButton(3)} className={activeButton == 3 ? "nav-element-active" : ""}>Register</a>
                </div>
            </div>
            
        </nav>
    )
}