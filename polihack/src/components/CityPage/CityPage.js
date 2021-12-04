import React, {useState, useEffect} from "react";
import "./CityPage.css"
import CompanyBox from "../company/company.js";
import {Outlet} from "react-router-dom";


export default function CityPage({id}) {
    const [companiesList, setCompaniesList] = useState([]);
    
    useEffect(()=> {
        fetch('http://localhost:8000/api/companies/')
        .then(response => response.json())
        .then(data => {
            setCompaniesList(data.filter((el) => el.city === id))
        })
    }, [])

    return <div className="city-page">
        {companiesList.map((company, idx) => 
            <CompanyBox name={company.name} rating={1} imgPath={company.company_img} key={idx} />
        )}
        <Outlet/>
    </div>
}