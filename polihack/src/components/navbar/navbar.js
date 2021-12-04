import React, { useState } from 'react'
import "./navbar.css"
import HomePage from '../HomePage/HomePage';
import LoginPage from '../LoginPage/LoginPage';
import ProductPage from '../ProductPage/ProductPage';
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

const NavBar=() => {
    const [activeButton, setActiveButton] = useState(0);

    return (
        <nav>
            <div className="navbar-elements">
                <div className="navbar-left">
                    <div className="logo-div"><p>LOGO</p></div>

                    <Link to = "/home" onClick={()=> setActiveButton(0)} className={activeButton == 0 ? "nav-element-active" : ""}>Home</Link>
                    <Link to="/product" onClick={()=> setActiveButton(1)} className={activeButton == 1 ? "nav-element-active" : ""}>Products</Link>
                </div>
                <div className="navbar-right">
                    <Link to="/login" onClick={()=> setActiveButton(2)} className={activeButton == 2 ? "nav-element-active" : ""}>Login</Link>
                    <Link to="/register" onClick={()=> setActiveButton(3)} className={activeButton == 3 ? "nav-element-active" : ""}>Register</Link>
                </div>
            </div>
            
        </nav>
    )
}

export default NavBar