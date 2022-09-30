import React, { useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import Geocode, { fromAddress } from 'react-geocode';
import Form from './Form';
import Result from './Result';





function GetLocation() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [showResult, setResult] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [firstLocation, setFirstLocation] = useState([]);
  const [secondLocation, setSecondLocation] = useState([]);
  

  

  useEffect(() => {
    console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=seattle&key=${process.env.REACT_APP_API_KEY}
    `)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=seattle&key=${process.env.REACT_APP_API_KEY}
    `)
      .then((response) => {
        if (!response.ok) {
          console.log("response");
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        const latLng1 = (jsonifiedResponse.results[0].geometry.location);
        console.log(latLng1);
        setFirstLocation(latLng1)
          
        })
        setIsLoaded(true);   
      // .catch((error) => {
      //   setError(error.message)
      //   setIsLoaded(true)
      // });
  }, [])

  useEffect(() => {
    console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=new+york&key=${process.env.REACT_APP_API_KEY}
    `)
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=new+york&key=${process.env.REACT_APP_API_KEY}
    `)
      .then((response) => {
        if (!response.ok) {
          console.log("response");
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        const latLng2 = (jsonifiedResponse.results[0].geometry.location);
        console.log(latLng2);
        setSecondLocation(latLng2)
          
        })
        setIsLoaded(true);   
  }, [])

  setResult(firstLocation + secondLocation) / 2;
  console.log(showResult);
  const handleFindingResultCoordinates = (firstLocation, secondLocation) => {
    let lat3 = (firstLocation.lat + secondLocation.lat) / 2
    let lng3 = (firstLocation.lng + secondLocation.lng) / 2
    setResult(lat3, lng3)
    console.log(lat3, lng3);
    setIsLoaded(true);
    handleFindingResultCoordinates();
  }

  const formSubmissionHandler = (e, location1, location2) => {
    e.preventDefault();
    handleFindingResultCoordinates();
    setFormVisibleOnPage(!formVisibleOnPage);
    return false;
  }
  
  
  let currentlyVisibleState = null;
    return (
      <React.Fragment>
        
        <h1>Location</h1>
        {currentlyVisibleState}
      </React.Fragment>
    )
  
 }


  

  

 
    
  

export default GetLocation;