import './App.css';
import React, { useContext } from 'react';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import SuperAdmin from './SuperAdmin';
import User from './User';
import ListAdmin from './ListAdmins';
import ListParticipant from './ListParticipants';
import ListOrganizedEvents from './ListOrganizedEvents';
import ListEventsByCity from './ListEventsByCity';
import ListEventsByDate from './ListEventsByDate';
import CreateEvent from './CreateEvent';
import ListActiveEvents from './ListActiveEvents';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Participant from './Participant';
import Adminview from './AdminView'; 
import ParticipantEvent from './participantEvent'; 
import {HomeContext} from './provider/provider';
import HomeProvider from './provider/provider';
// import Login from './Login.js';


function App() {
  const global = useContext(HomeContext)
  const state = global.state
  const dispatch = global.dispatch

  return (

    <HomeProvider>
      <Router> 
      <div className="App">
        {/* <Nav /> */}
        {/* <Login /> */}
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/user" component={User}/>
          <Route path="/superadmin" component={SuperAdmin}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/listadmins" component={ListAdmin}/>
          <Route path="/listparticipants" component={ListParticipant}/>
        
          <Route path="/listeventsbydate" component={ListEventsByDate}/>
          <Route path="/listeventsbycity" component={ListEventsByCity}/>

          <Route path="/createevent" component={CreateEvent}/>
          <Route path="/listactiveevents" component={ListActiveEvents}/>
          <Route path="/listorganizedevents" component={ListOrganizedEvents}/>
          
          <Route path="/participant" component={Participant}/>
          <Route path="/Adminview" component={Adminview}/> 
          <Route path="/participantevent" component={ParticipantEvent}/> 
        </Switch>
      </div>
      </Router>
    </HomeProvider>  
    
  );
}

const Home = () => (
  <div>
    <h1>Welcome Home</h1>
  </div> 
);

export default App;
