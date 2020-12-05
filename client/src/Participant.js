import React from "react";
import {useHistory} from "react-router-dom";
import "./Participant.css";

function Participant() { 
    const history=useHistory(); 
    const routeParticipant= () =>{
        // let path ='participant'; 
        history.push('/participant'); 
    }
    const routeAdmin= () =>{
        // let path ='participant'; 
        history.push('/adminview'); 
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
                    Emmanuel
                    
               
            </div>
            <div className="column"> 
                <h2>Email</h2>
                    Emmanuel@example.com
            </div>

            <div className="column"> 
                <h2>Events Attended</h2>
                    1
            </div>
            
        </div>
    )
}

export default Participant
