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
                
                var Events = document.getElementsByClassName("Rows1")
                for (var i = 0; i < Events.length; i++) {
                    document.getElementsByClassName("Rows1")[i].innerHTML = "";
                }
                console.log(document.getElementsByClassName("Rows1"));

                var Events2 = document.getElementsByClassName("Rows2")
                for (var i = 0; i < Events2.length; i++) {
                    Events2[i].innerHTML = "";
                }
                document.getElementById("d1").innerHTML = result.data.map(index => index.event_title + "<br/>");
                document.getElementById("d2").innerHTML = result.data.map(index => index.event_description + "<br/>");
                document.getElementById("d3").innerHTML = result.data.map(index => index.event_URL + "<br/>");
                document.getElementById("d4").innerHTML = result.data.map(index => index.event_start_date + "<br/>");
                document.getElementById("d5").innerHTML = result.data.map(index => index.event_end_date + "<br/>");
                document.getElementById("d6").innerHTML = result.data.map(index => index.event_city + "<br/>");
                document.getElementById("d7").innerHTML = result.data.map(index => index.event_address + "<br/>");
                document.getElementById("help").innerHTML = aName;
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
            <div className="myDiv" >
                <h2 className="adminName" id="help"></h2>
            </div>
            <div className="Acolumn">
                <h2 id= "secret">Admin Name</h2>
                    <ul id="Ulist">{participants.map(participant => <div className="Rows1" id="d1">{participant.display_name}</div>)}</ul>
            </div>

            <div className="Acolumn">
                <h2 id="s2"></h2>
                    {participants.map(participant => <div className="Rows2" id="d2"></div>)}
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

            

        </div>
    )
}

export default AdminView
