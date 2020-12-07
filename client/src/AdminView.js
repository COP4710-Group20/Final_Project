import React from "react";
import  {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import "./AdminView.css";

function AdminView() {
    const [participants, setParticipants]= useState([]);
    const history=useHistory();
    const routeParticipant= () =>{
        history.push('/participant');
    }
    const routeAdmin= () =>{
        history.push('/adminview');
    }

  useEffect(() => {
    fetch("http://localhost:3001/adminview")
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
        <div className="AcontainerB">
            <div className="ATop_column">
                <br></br>
                <h1>Super Admin Dashboard</h1>
                <div className="AbtnA_btton">
                    <button onClick={routeParticipant}>View Participants</button>
                    <button onClick={routeAdmin}>View Admin</button>
                </div>

            </div>
            <div className="Acolumn">
                <h2>Admin Name</h2>
                    {participants.map(participant => <Link to="/participantevent"><div>{participant.display_name}</div></Link>)}
            </div>

            <div className="Acolumn">
                <h2>Events hosted</h2>
                    {participants.map(participant => <div>{participant.is_participant}</div>)}
            </div>

        </div>
    )
}

export default AdminView
