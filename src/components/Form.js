import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function Form(props) {
  const [myLocation, setMyLocation] = useState("")
  const [secondLocation, setSecondLocation] = useState("");
 

  function handleLocationChange(e) {
    e.preventDefault();
    setMyLocation(e.target.value);
    setSecondLocation(e.target.value);
  }
  return (
    <h1>This is the Form</h1>
    )
  }