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
  

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location1}&key=${process.env.REACT_APP_API_KEY}
    `)
      .then(response => {
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText}`);
        } else {
          return response.json()
        }
      })
      .then((jsonifiedResponse) => {
        setFirstLocation(jsonifiedResponse.results[0].geometry.location)
        setIsLoaded(true)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoaded(true)
      });
  }, [])


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