import './App.css';
import React , { useState} from 'react';
import {Link, useHistory } from 'react-router-dom';
import Axios from 'axios';

function Login() {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  // const login = () => {
  //   console.log("Logging in");
  //   Axios.post("http://localhost:3001/login", {
  //     username: username, 
  //     password: password,
  //   }).then((response) => {
  //     console.log(response.data);

  //     if(response.data.message) {
  //       setLoginStatus(response.data.message);
  //     } else {
  //       setLoginStatus(response.data[0].username);
  //     }
  //   }) 
  // };

  const history=useHistory();

  const login = () => {
    console.log("Logging in");
    Axios.post("http://localhost:3001/login", {
      username: username, 
      password: password,
    }).then((response) => {
      console.log(response.data);

      if(response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        if (response.data[0].is_super == 1) {
          history.push('/superadmin');
        } else {
          history.push('/user');
        }
        setLoginStatus(response.data[0].display_name + response.data[0].is_super);
      }
    }) 
  };

  return (
    /*
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
*/
<div>
<div className="login">
        <h1>Login</h1>
        
        <label> Username </label>
        <input
          type="text"
          placeholder="Username..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Link to="/register">
         <p>Don't have an account?</p>
         </Link>
        <button onClick={login}> Login </button>
      </div>

      <h1>{loginStatus}</h1>


</div>
    
  );
}

export default Login;
