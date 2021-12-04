import React, {useState, useEffect} from "react";
import CityBox from "../city/city";
import './ProductPage.css'
import { Link } from 'react-router-dom';
import ClujPage from "../cities/Cluj/cluj";

const ClujPath = "./cityImg/Cluj.jpg"
const BucharestPath = "./cityImg/Bucharest.jpg"

export default function ProductPage() {
    return (
        <div className="float-container">
            <div className="float-child">
                <div className = "leftProduct">
                    <Link to="cluj">
                        <CityBox name={"Cluj"} imgPath={ClujPath}/>
                    </Link>  
                </div>

            </div>
            <div className="float-name">
                <div className = "rightProduct">
                    <Link to="bucuresti">
                        <CityBox name={"Bucuresti"} imgPath={BucharestPath}/>
                    </Link>  
                </div>
             </div>
        </div>);
}