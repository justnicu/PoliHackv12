import React from "react"
import "./company.css"

export default function CompanyBox({name, rating, imgPath}) {
    return (
        <div className="rounded-box">
            <img className="company-img" src={imgPath} />
            <h3 className="company-name">{name}</h3>
            <h3 className="company-rating">{rating}</h3>
        </div>
    )
}