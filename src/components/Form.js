import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

function Form(props) {
  const [myLocation, setMyLocation] = useState("seattle, wa")
  const [secondLocation, setSecondLocation] = useState("");
 

  function handleFirstLocation(e) {
    e.preventDefault();
    setMyLocation(e.target.value);
  }
  function handleSecondLocation(e) {
    e.preventDefault();
    setSecondLocation(e.target.value);
  }
  return (
    <React.Fragment>
    <h1>This is the Form</h1>
      <form onSubmit={(e)=> props.formSubmissionHandler(e)}>
        <input onChange={handleFirstLocation}
          type='text'
          name='firstAddress'
          />
        <input onChange={handleSecondLocation}
          type='text'
          name='secondAddress'
          />
        <button type='submit'>Find your halfway</button>
      </form>

    </React.Fragment>
    )
  }
Form.propTypes = {
  formSubmissionHandler: PropTypes.func,
};

export default Form;