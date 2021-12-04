import React from "react";
import CityBox from "../city/city";
import './ProductPage.css'

const ClujPath = "./cityImg/Cluj.jpg"
const BucharestPath = "./cityImg/Bucharest.jpg"
const IasiPath = "./cityImg/Iasi.jpg"
const TimisoaraPath = "./cityImg/Timisoara.jpg"

export default function ProductPage(){
    return (
        <div className="float-container">
            <div className="float-child">
                <div className = "leftProduct">
                    <CityBox name={"Cluj"} imgPath={ClujPath}/>
                </div>
                <div className = "rightProduct">
                    <CityBox name={"Bucuresti"} imgPath={BucharestPath}/>
                </div>
            </div>
            <div className="float-name">
                <div className = "leftProduct">
                    <CityBox name={"Iasi"} imgPath={IasiPath}/>
                </div>
                <div className = "rightProduct">
                    <CityBox name={"Timisoara"} imgPath={TimisoaraPath}/>
                </div>
            </div>


        </div>
    )
}