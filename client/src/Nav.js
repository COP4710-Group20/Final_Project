import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle = {
        color: 'white'
    };

  return (
    <nav>

        <ul className="nav-links">
            <Link style={navStyle} to='/user'>
                <li> User Dashboard </li>
            </Link>
            <Link style={navStyle} to='/superadmin'>
                <li> Super Admin Dashboard </li>
            </Link>
            <Link style={navStyle} to='/register'>
                <li> Register </li>
            </Link>
            <Link style={navStyle} to='/login'>
                <li> Login </li> 
            </Link>
            <Link style={navStyle} to='/listparticipants'>
                <li> List Participants </li>
            </Link>
            <Link style={navStyle} to='/listadmins'>
                <li> List Admin </li> 
            </Link>
            <Link style={navStyle} to='/listorganizedevents'>
                <li> List Events Organized </li> 
            </Link>
            <Link style={navStyle} to='/listactiveevents'>
                <li> List Active Events </li> 
            </Link>
            <Link style={navStyle} to='/listeventsbydate'>
                <li> By Date Events  </li> 
            </Link>
            <Link style={navStyle} to='/listeventsbycity'>
                <li> By City Events </li> 
            </Link>
        </ul>
     
    </nav>
  );
}

export default Nav;
