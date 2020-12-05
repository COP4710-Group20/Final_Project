import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'

function Register() {
  return (
    <div>
     <h1> Register </h1>
     <form className="registerForm">
        <label>Username</label>
        <input type="text" placeholder="Enter Username..."/>
        <label>Password</label>
        <input type="password" placeholder="Enter Password..."/>
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password..."/>
        <input type="submit" className="register-submit" Value="register"/>
        <Link to="/login">
        <p>Already have an account?</p>
        </Link>
     </form>    
    </div>
  );
}

export default Register;
