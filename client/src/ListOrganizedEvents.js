import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import PartButtons from './PartButtons'

function ListOrganizedEvents() {
  return (
    <div>
      <PartButtons></PartButtons>
     <h1> List Organized Events </h1>   
    </div>
  );
}

export default ListOrganizedEvents;