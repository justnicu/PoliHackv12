import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/navbar.js';
import LoginForm from "./components/LoginForm/LoginForm.js";
import CompanyBox from "./components/company/company.js"
import CityBox from "./components/city/city.js"
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import ProductPage from './components/ProductPage/ProductPage';


const imgPath = "/cityImg/pizza.jpg"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Outlet/>
      
    </div>
  );
}

export default App;
