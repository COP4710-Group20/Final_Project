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
                document.getElementById("emmanuel").innerHTML = result.data.map(piece => {return piece.event_id});
                //document.getElementsByClassName("adminName").innerHTML = "New HTML";
                //console.log(document.getElementById("help"));
                //document.getElementById("help").innerHTML = result.data[0].event_id + " " + result.data[0].user_id + " " + aName;
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
                <h2>Participant Name</h2>
                    <ul>
                    {participants.map(participant => <div>{participant.display_name}</div>)}
                    </ul>
            </div>

            <div className="column">
                <h2>Events Attended</h2>
                    {participants.map(participant => <div>{participant.is_participant}</div>)}
            </div>

            <div><p id="emmanuel"></p></div>

        </div>
    )
}

export default Participant
