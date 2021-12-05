import React from "react"
import "./company.css"

export default function CompanyBox({name, rating, imgPath}) {
    return (
        <>
        <div className="rounded-box">
            <div className="img-container">
                <img className="company-img" src={imgPath} />
            </div>
            <div className="flex-container-company-box">
                <p className="company-name">{name}</p>
                <p className="company-rating">{rating}</p>
            </div>
        </div>
        </>

    )
}