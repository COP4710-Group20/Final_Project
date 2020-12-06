import React from "react";
import  {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import "./AdminView.css";

function AdminView() {
    const [name, setName]= useState(false);
    useEffect(() => {
    getName();
  }, []);
    const history=useHistory();
    const routeParticipant= () =>{
        history.push('/participant');
    }
    const routeAdmin= () =>{
        history.push('/adminview');
    }
    function getName() {
    fetch('http://localhost:3001/adminview')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setName(data);
      });
  }
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
                    {name ? name : 'Empty'}
            </div>
            <div className="Acolumn">
                <h2>Email</h2>
                <div className="Arowb">
                    emmanuel@example.com
                </div>
            </div>

            <div className="Acolumn">
                <h2>Events hosted</h2>
                    10
            </div>

        </div>
    )
}

export default AdminView
