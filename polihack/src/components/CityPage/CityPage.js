import React, {useState, useEffect} from "react";
import "./CityPage.css"
import CompanyBox from "../company/company.js";
import {Link, Outlet} from"react-router-dom"


export default function CityPage({id, name}) {
    const [companiesList, setCompaniesList] = useState([]);
    
    useEffect(()=> {
        fetch('http://localhost:8000/api/companies/')
        .then(response => response.json())
        .then(data => {
            setCompaniesList(data.filter((el) => el.city === id))
        })
    }, [])

    return <div className="city-page">
        <div className="city-page-header-div">
            <h4 className="city-page-header">{"Felurile tale preferate de mâncare la un preț accesibil, în orașul "}<strong> {name} </strong></h4>
        </div>
        <div className="companies">
            {companiesList.map((company, idx) => 
            <Link to={"/companies/" + company.name.split(' ').join('-')} key={idx}>
                <CompanyBox name={company.name.split(' ').join('-')} rating={1} imgPath={company.company_img} />
            </Link>
            )}
            <Outlet/>
        </div>
    </div>
}