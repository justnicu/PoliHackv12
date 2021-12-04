import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar.js';
import LoginForm from "./components/LoginForm/LoginForm.js";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <LoginForm />
    </div>
  );
}

export default App;
