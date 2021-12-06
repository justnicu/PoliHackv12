import React, {useState, useEffect} from "react";
import CityBox from "../city/city";
import './ProductPage.css'
import { Link } from 'react-router-dom';
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import CityPage from "../CityPage/CityPage";

export default function ProductPage() {
    const [citiesList, setCitiesList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/api/cities/')
        .then(response => response.json())
        .then(data=> setCitiesList(data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="products-page">
            <p className="product-page-text">Alege-ți orașul.</p>
            <div className="city-list">
            {citiesList.map((city, idx) => 
            <>
            <Link className="city-link" to={city.name}>
                <CityBox name={city.name} id={city.id} imgPath={city.city_img} />
            </Link>
            <Outlet/>
            </>
            )}
            </div>
        </div>);
}