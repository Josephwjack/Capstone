import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Form } from 'react-bootstrap';


function Form(props) {
  const [firstLocation, setFirstLocation] = useState("");
  const [secondLocation, setSecondLocation] = useState("");
  
  
  function handleFirstLocationChange(e){
    e.preventDefault();
    setFirstLocation(e.target.value);
  }
  
  function handleSecondLocationChange(e){
    e.preventDefault();
    setSecondLocation(e.target.value);
  }
  
  return (
    
    <React.Fragment>
      <h1>This is the Form</h1>
        <Form onSubmit={(e)=>props.onFormSubmission(e, firstLocation, secondLocation)}>
          <Form.Group>
            <Form.Label>Select first location</Form.Label>
            <Form.Control onChange={handleFirstLocationChange}
              type='text'
              name='firstLocation'
              />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select second location</Form.Label>
            <Form.Control onChange={handleSecondLocationChange}
              type='text'
              name='secondLocation'
              />
          </Form.Group>
          <button type='submit'>Find your halfway</button>
        </Form>
    </React.Fragment>
  );
}
    

 
Form.propTypes = {
  onFormSubmission: PropTypes.func,
};

export default Form;