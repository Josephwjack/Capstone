import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import  Form  from 'react-bootstrap/Form';


function LocationForm(props) {
  const [location2, setLocation1] = useState(null);
  const [location1, setLocation2] = useState(null);
  
  
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
      <h1>This is the Form</h1>
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
          <button type='submit'>Find your halfway</button>
        </Form>
    </React.Fragment>
  );
}
    

 
LocationForm.propTypes = {
  onFormSubmission: PropTypes.func,
};

export default LocationForm;