import './App.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom'

function Login() {
  

  return (
    <div>
     <h1> Login </h1>
     <form className="loginForm">
         <label> Username </label>
         <input type="text" placeholder="Enter Username..."/>
         <label>Password</label>
         <input type="password" placeholder="Enter Password..."/>
         <input type="submit" className="login-submit" Value="login"/>
         <Link to="/register">
         <p>Don't have an account?</p>
         </Link>
     </form>    
    </div>
  );
}

export default Login;
