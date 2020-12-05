import './App.css';
import React from 'react';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import SuperAdmin from './SuperAdmin'
import User from './User'
import ListAdmin from './ListAdmins'
import ListParticipant from './ListParticipants'
import ListOrganizedEvents from './ListOrganizedEvents'
import ListEventsByCity from './ListEventsByCity'
import ListEventsByDate from './ListEventsByDate'
import CreateEvent from './CreateEvent'
import ListActiveEvents from './PartButtons'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (

    
    <Router> 
    <div className="App">
      <Nav />
      <Switch>
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
      </Switch>
    </div>
    </Router>
    
  );
}

const Home = () => (
  <div>
    <h1>Welcome Home</h1>
  </div> 
);

export default App;
