import './App.css';
import React , { useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';

function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    console.log("Logging in");
    Axios.post('http://localhost:3001/login', {
      username: username, 
      password: password,
    }).then((response) => {

      if(response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    }) 
  };

  return (
    <div>
     <h1> Login </h1>
     <form className="loginForm">
         <label> Username </label>
         <input type="text" onChange = {(e) => {setUsername(e.target.value);}} placeholder="Enter Username..."/>
         <label>Password</label>
         <input type="password" onChange = {(e) => {setPassword(e.target.value);}} placeholder="Enter Password..."/>
         <button onClick={login}> Login </button>
         <Link to="/register">
         <p>Don't have an account?</p>
         </Link>
     </form>    

     <h1> {loginStatus} </h1>
    </div>
  );
}

export default Login;
