import React from "react";
import  {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import "./Participant.css";
import Axios from 'axios';

function Participant() {
    const [participants, setParticipants]= useState([]);
    const history=useHistory();
    const routeParticipant= () =>{
        // let path ='participant';
        history.push('/participant');
    }
    const routeAdmin= () =>{
        // let path ='participant';
        history.push('/adminview');
    }
   useEffect(() => {
    fetch("http://localhost:3001/participant")
      .then(res => res.json())
      .then(
        (result) => {
          setParticipants(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
      )
  }, [])
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
                    <ul>
                    {participants.map(participant => <Link to="/participantevent"><div>{participant.display_name}</div></Link>)}
                    </ul>
            </div>

            <div className="column">
                <h2>Events Attended</h2>
                    {participants.map(participant => <div>{participant.is_participant}</div>)}
            </div>

        </div>
    )
}

export default Participant
