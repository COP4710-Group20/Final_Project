import React, {useContext} from "react";
import  {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import Axios from 'axios';
import {HomeContext} from './provider/provider';
import PartButtons from "./PartButtons";


function User() {
  const global = useContext(HomeContext)
  const state = global.state
  const dispatch = global.dispatch

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      console.log(response);
    });
  });
  return (
    <div className="userDashboard">
      <PartButtons></PartButtons>
     <h1> Welcome User {state.user.user.display_name} </h1>
    </div>
  );
}

export default User;
