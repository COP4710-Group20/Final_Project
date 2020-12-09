import React, {useContext} from "react";
import  {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom";
import "./Participant.css";
import Axios from 'axios';
import {HomeContext} from './provider/provider';

function Participant() {
    const global = useContext(HomeContext)
    const state = global.state
    const dispatch = global.dispatch

    const [uName, setUName] = useState("");
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

    const searchUser= () =>{
        Axios.post("http://localhost:3001/singlepart2", {
            uName: uName,
        }).then(
            (result) => {
                console.log(result);
                document.getElementById("s1").innerHTML = "Event Title";
                document.getElementById("s2").innerHTML = "Event Description";
                /*document.getElementById("s3").innerHTML = "Event URL";
                document.getElementById("s4").innerHTML = "Start Date";
                document.getElementById("s5").innerHTML = "End Date";
                document.getElementById("s6").innerHTML = "City";
                document.getElementById("s7").innerHTML = "Address";*/
                var Events = document.getElementsByClassName("Rows1")
                for (var i = 0; i < Events.length; i++) {
                    document.getElementsByClassName("Rows1")[i].innerHTML = "";
                }
                console.log(document.getElementsByClassName("Rows1"));

                var Events2 = document.getElementsByClassName("Rows2")
                for (var i = 0; i < Events2.length; i++) {
                    Events2[i].innerHTML = "";
                }
                document.getElementById("d1").innerHTML = result.data.map(index => index.event_id);
                /*document.getElementById("d2").innerHTML = result.data.map(index => index.event_description);
                document.getElementById("d3").innerHTML = result.data.map(index => index.event_URL);
                document.getElementById("d4").innerHTML = result.data.map(index => index.event_start_date);
                document.getElementById("d5").innerHTML = result.data.map(index => index.event_end_date);
                document.getElementById("d6").innerHTML = result.data.map(index => index.event_city);
                document.getElementById("d7").innerHTML = result.data.map(index => index.event_address);*/
            }
        )
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

            <div>
                <h1> Search participant name to see their events attended </h1>
                <input type="text" placeholder="Insert Participant Name..."
                onChange={(e) => {
                setUName(e.target.value);
                }}></input>
                <button onClick={searchUser}>Search Their Events!</button>
                </div>
            <div className="column">
                <h2 id= "s1">Participant Name</h2>
                    <ul>
                    {participants.map(participant => <div className="Rows1" id="d1">{participant.display_name}</div>)}
                    </ul>
            </div>

            <div className="column">
                <h2 id="s2">Events Attended</h2>
                    {participants.map(participant => <div className="Rows2" id="d2">{participant.is_participant}</div>)}
            </div>

            <div className="column">
                <h2 id="s3"> </h2>
                    <div id="d3"> </div>
            </div>

            <div className="column">
                <h2 id="s4"> </h2>
                    <div id="d4"> </div>
            </div>

            <div className="column">
                <h2 id="s5"> </h2>
                    <div id="d5"> </div>
            </div>

            <div className="column">
                <h2 id="s6"> </h2>
                    <div id="d6"> </div>
            </div>

            <div className="column">
                <h2 id="s7"> </h2>
                    <div id="d7"> </div>
            </div>

        </div>
    )
}

export default Participant
