import './App.css';
import React , { useState }from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

function Register() {

  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [displaynameReg, setDisplaynameReg] = useState("");

  const register = () => {
    Axios.post('http://localhost:3001/register', {
      username: usernameReg, 
      password: passwordReg,
      display_name: displaynameReg,
    }).then((response) => {
      console.log(response);
    }) 
  };
  return (
    <div>
     <h1> Register </h1>
     <form className="registerForm">
        <label>Username</label>
        <input 
        type="text" 
        onChange = {(e) => {
          setUsernameReg(e.target.value);
        }}
        placeholder="Enter Username..."
        />
        <label>Display Name</label>
        <input 
        type="text" 
        onChange = {(e) => {
          setDisplaynameReg(e.target.value);
        }}
        placeholder="Enter Display Name..."
        />
        <label>Password</label>
        <input 
        type="password" 
        onChange = {(e) => {
          setPasswordReg(e.target.value);
        }}
        placeholder="Enter Password..."/>
        <label>Confirm Password</label>
        <input type="password" placeholder="Confirm Password..."/>
        <button onClick={register}> Register </button> 
        <Link to="/">
        <p>Already have an account?</p>
        </Link>
     </form>    
    </div>
  );
}

export default Register;
