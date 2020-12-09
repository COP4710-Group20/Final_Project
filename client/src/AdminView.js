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
                document.getElementById("secret").innerHTML = "Event Title";
                document.getElementById("s2").innerHTML = "Event Description";
                document.getElementById("s3").innerHTML = "Event URL";
                document.getElementById("s4").innerHTML = "Start Date";
                document.getElementById("s5").innerHTML = "End Date";
                document.getElementById("s6").innerHTML = "City";
                document.getElementById("s7").innerHTML = "Address";
                document.getElementById("d1").innerHTML = result.map(result => <div id="d1">{result.event_title}</div>);
                document.getElementById("d2").innerHTML = result.map(result => <div id="d2">{result.event_description}</div>);
                document.getElementById("d3").innerHTML = result.map(result => <div id="d3">{result.event_URL}</div>);
                document.getElementById("d4").innerHTML = result.map(result => <div id="d4">{result.event_start_date}</div>);
                document.getElementById("d5").innerHTML = result.map(result => <div id="d5">{result.event_end_date}</div>);
                document.getElementById("d6").innerHTML = result.map(result => <div id="d6">{result.event_city}</div>);
                document.getElementById("d7").innerHTML = result.map(result => <div id="d7">{result.event_address}</div>);
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
                    {participants.map(participant => <div id="d1">{participant.display_name}</div>)}
            </div>

            <div className="Acolumn">
                <h2 id="s2">Events hosted</h2>
                    {participants.map(participant => <div id="d2">{participant.is_admin}</div>)}
            </div>
            <div className="Acolumn">
                <h2 id="s3"> </h2>
                    <div id="d3"> </div>
            </div>

            <div className="Acolumn">
                <h2 id="s4"> </h2>
                    <div id="d4"> </div>
            </div>

            <div className="Acolumn">
                <h2 id="s5"> </h2>
                    <div id="d5"> </div>
            </div>

            <div className="Acolumn">
                <h2 id="s6"> </h2>
                    <div id="d6"> </div>
            </div>

            <div className="Acolumn">
                <h2 id="s7"> </h2>
                    <div id="d7"> </div>
            </div>

            <div className="myDiv" >
                <p className="adminName" id="help"></p>
            </div>

        </div>
    )
}

export default AdminView
