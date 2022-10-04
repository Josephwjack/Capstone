import React, { useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import LocationForm from './LocationForm';
import Result from './Result';
import db  from '../firebase.js';
import { collection, addDoc, doc, onSnapshot} from 'firebase/firestore';




function GetLocation() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [showResult, setResult] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  
  
  async function GetData(call) {
    
    const url1 = (`https://maps.googleapis.com/maps/api/geocode/json?address=${call.location1}&key=${process.env.REACT_APP_API_KEY}`)
    const url2 = (`https://maps.googleapis.com/maps/api/geocode/json?address=${call.location2}&key=${process.env.REACT_APP_API_KEY}`)
    
    const responses = await Promise.all([fetch(url1), fetch(url2)])
    
    const data1 = await responses[0].json();
    const data2 = await responses[1].json();
    
    const firstSet = data1.results.map( ele => {
      return {lat: ele.geometry.location.lat, lng: ele.geometry.location.lng}
    });
    const secondSet = data2.results.map( ele => {
      return {lat: ele.geometry.location.lat, lng: ele.geometry.location.lng}
    });
    
    const lat3 = (firstSet[0].lat + secondSet[0].lat) / 2;
    const lng3 = (firstSet[0].lng + secondSet[0].lng) / 2;
    console.log(lat3);
    const resultCoordinates = {lat: lat3, lng: lng3};
    console.log(resultCoordinates);
    Object.values(resultCoordinates);

    const url3 = (`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat3},${lng3}&location_type=ROOFTOP&result_type=street_address&key=${process.env.REACT_APP_API_KEY}`
       )
    const response = await Promise.all([fetch(url3)])
    const data3 = await response[0].json();
     
    
    
    let formattedAddress = data3.results.map(e => {
      return {name: e.formatted_address}
    });
    setResult(formattedAddress);
    console.log(lat3, lng3);
    console.log(formattedAddress);
    setIsLoaded(true);
     
    
  }
  
  const formSubmissionHandler = (e, location1, location2) => {
    e.preventDefault();
    GetData({
      location1: location1,
      location2: location2,
    });
    
  
    
    setFormVisibleOnPage(!formVisibleOnPage);
    return false;
  }


  
  let currentlyVisibleState = null;
  if (error) {
    return <h1>Error: </h1>;

  // } else if (!isLoaded) {
  //   return <h1>...LOADING...</h1>;
  }
   if (formVisibleOnPage) {
    currentlyVisibleState = <LocationForm onFormSubmission={formSubmissionHandler}/>
  } 
  // else if (!!showResult) {
  //   currentlyVisibleState = <Result resultLocation={showResult}/>
  // }
  
  
    return (
      <React.Fragment>
        
        <h1>Return</h1>
        {currentlyVisibleState}
      </React.Fragment>
    )
  
 }


  

  

 
    
  

export default GetLocation;