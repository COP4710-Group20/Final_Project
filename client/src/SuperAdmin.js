import './App.css';
import React , { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import {HomeContext} from './provider/provider';

function SuperAdmin() {

  const global = useContext(HomeContext);
  const state = global.state;
  const dispatch = global.dispatch;

  console.log("This is the state for superadmin");
  console.log(state);
  const history=useHistory(); 
  const routeParticipant= () =>{
      history.push('/participant'); 
  }
  const routeAdmin= () =>{
      history.push('/adminview'); 
  }
  return(
    <div className="containerB">
      <div className="Top_column">
        <br></br>
  <h1>Super Admin Dashboard for {state.user.user.display_name}</h1>
        <div className="btnA_btton">
            <button onClick={routeParticipant}>View Participants</button>
            <button onClick={routeAdmin}>View Admin</button>
        </div>
      </div>
    </div>
  );
}

export default SuperAdmin;
