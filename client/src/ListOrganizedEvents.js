import './App.css';
import React from 'react';
import PartButtons from './PartButtons'

function ListOrganizedEvents() {
  return (
    <div className="userDashboard">
      <PartButtons></PartButtons>
     <h1> List Organized Events </h1>   
    </div>
  );
}

export default ListOrganizedEvents;