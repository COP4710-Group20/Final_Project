import React from "react";
import {useHistory} from "react-router-dom";
import "./AdminView.css";

function AdminView() {
    const history=useHistory(); 
    const routeParticipant= () =>{
        history.push('/participant'); 
    }
    const routeAdmin= () =>{
        history.push('/adminview'); 
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
                    Emmanuel
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
