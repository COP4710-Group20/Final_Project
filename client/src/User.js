import './App.css';
import React from 'react';
import {Link} from 'react-router-dom'
import PartButtons from './PartButtons'

function User() {
  return (
    <div>
      <PartButtons></PartButtons>
     <h1> Welcome User </h1>
    </div>
  );
}

export default User;
