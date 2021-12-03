import React, {useState} from 'react'
import { Helmet } from 'react-helmet'
import "./navbar.css"
export default function NavBar(){

    function myFunction(){
        var x = document.getElementById("navbar");
        if(x.className === "topnav")
        {
            x.className += " responsive";
        }
        else{
            x.className = "topnav";
        }
    }

    return (
        <div id = "navbar" className = "topnav">
            <div className = "navbar_elements">
                <a href = "#home" className = "active">Home</a>
                <a href = "#products">Products</a>
                <a href = "#login">Login</a>
                <button onClick = {myFunction} id = "navbar_button">
                    Click me
                </button>
            </div>
            
        </div>
    )
}