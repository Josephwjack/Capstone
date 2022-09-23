import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import ReusableForm from './ReusableForm';


function Form(props) {
  const [firstLocation, setFirstLocation] = useState("");
  const [secondLocation, setSecondLocation] = useState("");
  
  function handleFirstLocation(event){
    event.preventDefault();
      setFirstLocation(event.target.value); 
  }

  function handleSecondLocation(event){
    event.preventDefault();
      setSecondLocation(event.target.value);
  }
  
  return (
    
    <React.Fragment>
      <h1>This is the Form</h1>
        <form onSubmit={(event)=>props.onNewSubmission(event, firstLocation, secondLocation)}>
        <input onChange={handleFirstLocation}
          type='text'
          name='firstLocation'
          />
        <input onChange={handleSecondLocation}
          type='text'
          name='secondLocation'
          />
        <button type='submit'>Find your halfway</button>
      </form>
    </React.Fragment>
  );
}
    

 
Form.propTypes = {
  onNewSubmission: PropTypes.func,
};

export default Form;