import './App.css';
import NavBar from './components/navbar/navbar.js';
import LoginForm from "./components/LoginForm/LoginForm.js";
import CompanyBox from "./components/company/company.js"
import CityBox from "./components/city/city.js"

const imgPath = "/cityImg/pizza.jpg"

function App() {
  return (
    <div className="App">
      <CityBox name={"Bucuresti"} imgPath={imgPath} />
    </div>
  );
}

export default App;
