import React from "react";

import './HomePage.css';
import img from "./home-photo.jpg";


export default function HomePage(){
    return (
        <div className="home-page-div">
            <img className = "homepage-photo" src={img} alt=""/>
            <div className="img-overlay">
                <p className="home-title">Too Tasty To Waste</p>
                <p className="home-description">Only by working together can we put a stop to the atrocious and inhuman waste of precious food!</p>
            </div>

        </div>
    )
}