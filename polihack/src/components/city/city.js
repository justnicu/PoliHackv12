import React from "react"
import "./city.css"
import { Link } from 'react-router-dom';


export default function CityBox({name, id, imgPath}) {
    return (
            <div className="rounded-city-box">
                <div className="city-overlay"></div>
                <img className="city-img" src={imgPath} />
                <h3 className="city-name">{name}</h3>
            </div>
    )
}