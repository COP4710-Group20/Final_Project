import React from "react";
import  {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import "./AdminView.css";
import Axios from 'axios';

function AdminView() {
    const [participants, setParticipants]= useState([]);
    const [aName, setAName]= useState([]);
    const history=useHistory();
    const routeParticipant= () =>{
        history.push('/participant');
    }
    const routeAdmin= () =>{
        history.push('/adminview');
    }

    const searchAdmin= () =>{
        Axios.post("http://localhost:3001/singlepart", {
            name: aName,
        }).then(
            (result) => {
                console.log(result);
                //document.getElementsByClassName("adminName").innerHTML = "New HTML";
                console.log(document.getElementById("help"));
                document.getElementById("secret").innerHTML = "Event title";
                document.getElementById("help").innerHTML = result.data[0].event_id + " " + result.data[0].user_id + " " + aName;
            }
        )
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
            <div>
                <h1> Search admin to see their events hosted </h1>
                <input type="text" placeholder="Insert Admin Name..."
                onChange={(e) => {
                setAName(e.target.value);
                }}></input>
                <button onClick={searchAdmin}>Search Their Events!</button>
                </div>
            {/* <div className="AdminNameInput">
                <form>
                    <input id="AdminName"> </input>
                </form>
            </div>     */}
            <div className="Acolumn">
                <h2 id= "secret">Admin Name</h2>
                    {participants.map(participant => <div>{participant.display_name}</div>)}
            </div>

            <div className="Acolumn">
                <h2>Events hosted</h2>
                    {participants.map(participant => <div>{participant.is_admin}</div>)}
            </div>

            <div className="myDiv" >
                <p className="adminName" id="help">Hi</p>
            </div>

        </div>
    )
}

export default AdminView
