import React, {useState, useEffect} from "react";
import "./RegisterPage.css";
import axios from 'axios';

export default function RegisterForm() {
    const [firstNameInputValue, setFirstNameInputValue] = useState("");
    const [lastNameInputValue, setLastNameInputValue] = useState("");
    const [emailInputValue, setEmailInputValue] = useState("");
    const [usernameInputValue, setUsernameInputValue] = useState("");
    const [passInputValue, setPassInputValue] = useState("");

    const registerUser = () => {
    axios.post('http://localhost:8000/api/auth/register/', {
        username: usernameInputValue,
        first_name: firstNameInputValue,
        last_name: lastNameInputValue,
        email: emailInputValue,
        password: passInputValue
    })
      .then(data => console.log(data))
      .catch((error)=> alert(error));
    }

    return <form className="register-form">
        <input className="first-name-input" type="text" onChange={(e)=>setFirstNameInputValue(e.target.value)} placeholder="First Name"></input>
        <input className="last-name-input" type="text" onChange={(e)=>setLastNameInputValue(e.target.value)} placeholder="Last Name"></input>
        <input className="email-input" type="text" onChange={(e)=>setEmailInputValue(e.target.value)} placeholder="Email"></input>
        <input className="username-input" type="text" onChange={(e)=>setUsernameInputValue(e.target.value)}  placeholder="Username"></input>
        <input className="pass-input" type="password" onChange={(e)=>setPassInputValue(e.target.value)} placeholder="Password"></input>
        <input className="submit-input" onClick={(e)=> {
            e.preventDefault()
            registerUser()
        }} type="submit" value="Register"></input>
    </form>
}