import {useHistory, useParams } from 'react-router-dom';
import "./Participant.css";
import Axios from 'axios';
import React, { useState, useEffect } from "react";
function Participant() {
    const [participants, setParticipants]= useState([]);
    const history=useHistory();
    const { id } = useParams();
    const routeParticipant= () =>{
        // let path ='participant';
        history.push('/participant');
    }
    const routeAdmin= () =>{
        // let path ='participant';
        history.push('/adminview');
    }
   useEffect(() => {
    fetch("http://localhost:3001/singlePart/", {id: {id}})
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
                <h2>Event title</h2>
                    <ul>
                    {participants.map(participant => <div>{participant.event_title}</div>)}
                    </ul>
            </div>

            <div className="column">
                <h2>Event description</h2>
                    {participants.map(participant => <div>{participant.event_description}</div>)}
            </div>
            <div className="column">
                <h2>Event URL</h2>
                    {participants.map(participant => <div>{participant.event_URL}</div>)}
            </div>
            <div className="column">
                <h2>Event Start Date</h2>
                    {participants.map(participant => <div>{participant.event_start_date}</div>)}
            </div>
            <div className="column">
                <h2>Event End date</h2>
                    {participants.map(participant => <div>{participant.event_end_date}</div>)}
            </div>
            <div className="column">
                <h2>Event city</h2>
                    {participants.map(participant => <div>{participant.event_city}</div>)}
            </div>
            <div className="column">
                <h2>Event address</h2>
                    {participants.map(participant => <div>{participant.event_address}</div>)}
            </div>
        </div>
    )
}

export default Participant
