import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import ReusableForm from './ReusableForm';


function Form(props) {
  // const [myLocation, setMyLocation] = useState(null);
  // const [secondLocation, setSecondLocation] = useState(null);
  
  function handleNewSubmission(event){
    event.preventDefault();
    props.onNewSubmission({
      firstLocation: event.target.firstLocation.value,
      secondLocation: event.target.secondLocation.value
    });
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleNewSubmission}
        buttonText = "Search"/>
    

    </React.Fragment>
    )
  }
Form.propTypes = {
  onFormSubmission: PropTypes.func,
};

export default Form;