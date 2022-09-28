import React, { useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import Form from './Form';
import Result from './Result';




function GetLocation() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [showResult, setResult] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [firstLocation, setFirstLocation] = useState([]);
  const [secondLocation, setSecondLocation] = useState([]);
  

  const makeApiCall = async (call) => {
    let response;
    try {
      response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${call.location1}&key=${process.env.REACT_APP_API_KEY}`
      )
    } catch(error){
      console.log(error, "fetch error");
    }
    let data;
    try {
      data = await response.json();
    } catch(error){
      console.log(error, "response error");
    }
    let firstCoords = data.results.map(ele => {
      return {location: ele.geometry.location}
    });
    setFirstLocation(firstCoords);
    setIsLoaded(true)
  };

  const formSubmissionHandler = (e, location1) => {
    e.preventDefault();
    makeApiCall({
      location1: location1,
      
    });
    setFormVisibleOnPage(!formVisibleOnPage);
    return false;
  }

  // useEffect(() => {
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=seattle+wa&key=${process.env.REACT_APP_API_KEY}
  //   `)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`${response.status}: ${response.statusText}`);
  //       } else {
  //         return response.json()
  //       }
  //     })
  //     .then((jsonifiedResponse) => {
  //       let addy1 = jsonifiedResponse.results.map(ele => {
  //         return { lat: ele.lat, lng: ele.lng}
  //       });
  //       setFirstLocation(addy1);
  //       setIsLoaded(true)    
  //     })
  //     .catch((error) => {
  //       setError(error.message)
  //       setIsLoaded(true)
  //     });
  // }, [])


  // Geocode.setLanguage("en");
  // Geocode.setRegion("us");
  
  
  // Geocode.fromAddress("seattle, wa").then(
  //   (response) => {
  //     const result = response.results[0].geometry.location;
  //     console.log(result);
  //     setFirstLocation(result);
  //     console.log(firstLocation);
  //   },
  //   (error) => {
  //     setError(error.message);
  //   }
  // );
  
    return (
      <React.Fragment>
        
        <h1>Location</h1>
        {currentlyVisibleState}
      </React.Fragment>
    )
  
 }


  

  

 
    
  

export default GetLocation;