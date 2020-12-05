import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import PartButtons from './PartButtons'

function ListEventsByCity() {
  return (
    <div>
      <PartButtons></PartButtons>
     <h1> List Events In a city... </h1>   
    </div>
  );
}

export default ListEventsByCity;