import './App.css';
import NavBar from './components/navbar/navbar.js';
import LoginForm from "./components/LoginForm/LoginForm.js";
import CompanyBox from "./components/company/company.js"

const imgPath = "/pizza.jpg"

function App() {
  return (
    <div className="App">
      <CompanyBox name={"Burger Grill"} rating={"6/9"} imgPath={imgPath} />
    </div>
  );
}

export default App;
