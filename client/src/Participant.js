import React from "react";
import  {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import "./Participant.css";
import Axios from 'axios';

function Participant() {
    const [name, setName]= useState(false);
    useEffect(() => {
    getName();
  }, []);
    const history=useHistory();
    const routeParticipant= () =>{
        // let path ='participant';
        history.push('/participant');
    }
    const routeAdmin= () =>{
        // let path ='participant';
        history.push('/adminview');
    }
    function getName() {
    fetch('http://localhost:3001/participant')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setName(data);
      });
  }
    return (
        <div className="containerB">
            <div className="Top_column">
                <br></br>
                <h1>Super Admin Dashboard</h1>
                <div className="btnA_btton">
                    <button onClick={routeParticipant}>View Participants</button>
                    <button onClick={routeAdmin}>View Admin</button>
                </div>

            </div>
            <div className="column">
                <h2>Participant Name</h2>
                    {name ? name : 'Empty'}
            </div>

            <div className="column">
                <h2>Events Attended</h2>
                    1
            </div>

        </div>
    )
}

export default Participant
