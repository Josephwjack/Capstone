import React from 'react';
import { PropTypes } from 'prop-types';
import ReusableForm from './ReusableForm';


function Form(props) {
 
  
  function handleNewSubmission(event){
    event.preventDefault();
    props.onNewSubmission({
      firstAddress: event.target.firstAddress.value,
      secondAddress: event.target.secondAddress.value
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
  onNewSubmission: PropTypes.func,
};

export default Form;