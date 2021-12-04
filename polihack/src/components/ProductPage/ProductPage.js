import React, {useState, useEffect} from "react";
import CityBox from "../city/city";
import './ProductPage.css'

export default function ProductPage(){
    const [cityList, setCityList] = useState([])

    useEffect(()=> {
        fetch('http://localhost:8000/api/cities/')
        .then(response => response.json())
        .then(data => setCityList([...data]))
    }, [])

    return (
       <div className="cities-div">
           {cityList.map((city, idx) =>
             <CityBox name={city.name} imgPath={city.city_img} key={idx}/>
           )}
       </div>
    )
}