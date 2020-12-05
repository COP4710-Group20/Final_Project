import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import ListActiveEvents from './PartButtons'
import PartButtons from './PartButtons'

function ListAdmins() {
  return (
    <div>
      <PartButtons></PartButtons>
     <h1> ListAdmin </h1>   
    </div>
  );
}

export default ListAdmins;