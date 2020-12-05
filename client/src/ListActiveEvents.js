import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import PartButtons from './PartButtons'

function ListActiveEvents() {
  return (
    <div>
        <PartButtons></PartButtons>
        <h1> List Active Events </h1>   
    </div>
  );
}

export default ListActiveEvents;