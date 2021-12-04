import React from "react"
import "./city.css"

export default function CityBox({name, imgPath}) {
    return (
        <div className="rounded-city-box">
            <img className="city-img" src={imgPath} />
            <h3 className="city-name">{name}</h3>
        </div>
    )
}