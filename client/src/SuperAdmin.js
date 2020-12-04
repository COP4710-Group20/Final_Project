import './App.css';
import React from 'react';
import {useHistory} from 'react-router-dom'
import "./App.css";

function SuperAdmin() {
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
        <h1>Super Admin Dashboard</h1>
        <div className="btnA_btton">
            <button onClick={routeParticipant}>View Participants</button>
            <button onClick={routeAdmin}>View Admin</button>
        </div>
      </div>
    </div>
  );
}

export default SuperAdmin;
