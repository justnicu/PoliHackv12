import React from "react"
import {Link} from "react-router-dom";
import "./LoggedInPage.css"

export default function LoggedInPage({name, email}) {
    return <div className="logged-in-page">
        <h4 className="greeting-header">{"Hi, " + name + "!"}</h4>
    <Link to="listings"><button className="view-listings">View Your Listings</button></Link>
    </div>
}