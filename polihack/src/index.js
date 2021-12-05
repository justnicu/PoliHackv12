import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ProductPage from './components/ProductPage/ProductPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import CityPage from './components/CityPage/CityPage';
import CompanyProductPage from "./components/CompanyProductPage/CompanyProductPage";

let citiesList;
fetch('http://localhost:8000/api/cities/')
.then(response => response.json())
.then(data => {
    citiesList = [...data]
    getCompaniesList();
  })
.catch(err => console.log(err))

let companiesList;

const getCompaniesList = () => {
  fetch('http://localhost:8000/api/companies/')
.then(response => response.json())
.then(data => {
    companiesList = [...data]
    render();
  })
.catch(err => console.log(err))
}

const render = () => {
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="products" exact element={<ProductPage/>}></Route>
          {citiesList.map((city) => 
              <Route path={"products/" + city.name} element={<CityPage id={city.id} name={city.name} />}></Route>
            )}
            {companiesList.map((company) => 
              <Route path={"companies/" + company.name} element={<CompanyProductPage id={company.id} name={company.name} img={company.company_img} />}></Route>
            )}
          <Route path="login" element={<LoginPage/>}>
          </Route>
          <Route path="register" element={<RegisterPage/>}></Route>
        </Route>

      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
}
