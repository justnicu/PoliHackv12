import React from "react";
import "./RegisterPage.css";

export default function LoginForm() {
    return <form className="login-form">
        <input className="name-input" type="text" placeholder="Name"></input>
        <input className="email-input" type="text" placeholder="Email"></input>
        <input className="address-input" type="text" placeholder="Address"></input>
        <input className="pass-input" type="password" placeholder="Password"></input>
        <input className="submit-input" type="submit" value="Register"></input>
    </form>
}