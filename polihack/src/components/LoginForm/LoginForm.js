import React, { useState, useEffect } from "react";
import "./LoginForm.css";

export default function LoginForm() {
    return <form className="login-form">
        <input className="email-input" type="text" placeholder="Email"></input>
        <input className="pass-input" type="password" placeholder="Password"></input>
        <input className="submit-input" type="submit" value="Login"></input>
    </form>
}