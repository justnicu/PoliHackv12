import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar.js';
import LoginForm from "./components/LoginForm/LoginForm.js";
import CompanyBox from "./components/company/company.js"
import CityBox from "./components/city/city.js"
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import ProductPage from './components/ProductPage/ProductPage';
import LoggedInPage from './components/LoggedInPage/LoggedInPage';
import axios from 'axios';


function App() {
  // useEffect(()=> {
  //   axios.post('http://localhost:8000/api/companies/', {
  //     name: "nicu",
  //     address: "nicu",
  //     city: 1,
  //     rating: 1,
  //     company_img: null
  //   })
  //     .then(data => console.log(data))
  //     .catch((error)=> console.log("error:", error));
  // }, [])

  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      {/* <LoggedInPage name="vlad" email="vlad@vlad" /> */}
    </div>
  );
}

export default App;
