import './App.css';
import React, { useEffect } from 'react';
import {Link} from 'react-router-dom'
import PartButtons from './PartButtons'
import Axios from 'axios';

function User() {
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response);
    });
  });
  return (
    <div>
      <PartButtons></PartButtons>
     <h1> Welcome User </h1>
    </div>
  );
}

export default User;
