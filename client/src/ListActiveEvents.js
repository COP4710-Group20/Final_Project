import './App.css';
import React from 'react';
import PartButtons from './PartButtons'

function ListActiveEvents() {
  return (
    <div className="userDashboard">
        <PartButtons></PartButtons>
        <h1> List Active Events </h1>   
    </div>
  );
}

export default ListActiveEvents;