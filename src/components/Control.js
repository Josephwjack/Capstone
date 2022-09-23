import React, { useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import Form from './Form';
import Result from './Result';



function GetLocation() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [showResult, setResult] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
 
  
  // Geocode.setLanguage("en");
  // Geocode.setRegion("us");
  

  // Geocode.fromAddress().then(
  //   (response) => {
  //     const result = response.results[0].geometry.location;
  //     console.log(result);
  //     setMyLocation(result);
  //     console.log(myLocation);
  //   },
  //   (error) => {
  //     setError(error.message);
  //   }
  // );
  


  

  

 
    
  
}

export default GetLocation;