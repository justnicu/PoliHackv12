import React, {useState, useEffect, useContext} from "react";
import "./LoginForm.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [usernameInputValue, setUsernameInputValue] = useState("");
    const [passInputValue, setPassInputValue] = useState("");
    const navigate = useNavigate();

    const logInUser = () => {
    axios.post('http://localhost:8000/api/auth/login/', {
        username: usernameInputValue,
        password: passInputValue
    })
      .then((data) => {
          console.log(data);
            navigate("/");
        })
      .catch((error)=> alert(error));
    }

    return(
    <form className="login-form">
        <input className="username-input" type="text" onChange={(e)=>setUsernameInputValue(e.target.value)}  placeholder="Username"></input>
        <input className="pass-input" type="password" onChange={(e)=>setPassInputValue(e.target.value)} placeholder="Password"></input>
        <input className="submit-input" onClick={(e)=> {
            e.preventDefault()
            logInUser()
        }} type="submit" value="Login"></input>
    </form>)
}