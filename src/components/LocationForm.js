import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import  Form  from 'react-bootstrap/Form';


function LocationForm(props) {
  const [location1, setLocation1] = useState(null);
  const [location2, setLocation2] = useState(null);
  
  
  function handleFirstLocationChange(e){
    e.preventDefault();
    setLocation1(e.target.value);
  }
  
  function handleSecondLocationChange(e){
    e.preventDefault();
    setLocation2(e.target.value);
  }
  
  return (
    
    <React.Fragment>
      <h1>Find the midpoint between you and a friend</h1>
        <Form onSubmit={(e)=>props.onFormSubmission(e, location1, location2)}>
          <Form.Group className="mb-3" controlId="firstLocation">
            <Form.Label>Select first location</Form.Label>
            <Form.Control onChange={handleFirstLocationChange}
              type='text'
              name='firstLocation'
              placeholder="Enter first location"
              />
          </Form.Group>
          <Form.Group className="mb-3" controlId="secondLocation">
            <Form.Label>Select second location</Form.Label>
            <Form.Control onChange={handleSecondLocationChange}
              type='text'
              name='secondLocation'
              placeholder="Enter second location"
              />
          </Form.Group>
          <button type='submit'>Go!</button>
        </Form>
    </React.Fragment>
  );
}
    

 
LocationForm.propTypes = {
  onFormSubmission: PropTypes.func,
  location1: PropTypes.string,
  location2: PropTypes.string,
};

export default LocationForm;