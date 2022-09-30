import React, { useEffect, useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import Geocode, { fromAddress } from 'react-geocode';
import Form from './Form';
import Result from './Result';
import { map } from '@firebase/util';
import { db } from './..firebase.js';
import { collection, addDoc, doc, onSnapshot} from 'firebase/firestore';




function GetLocation() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [showResult, setResult] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  
  
  async function GetData(){
    const url1 = (`https://maps.googleapis.com/maps/api/geocode/json?address=seattle&key=${process.env.REACT_APP_API_KEY}`)
    const url2 = (`https://maps.googleapis.com/maps/api/geocode/json?address=new+york&key=${process.env.REACT_APP_API_KEY}`)
    
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
    let resultCoordinates = {lat3, lng3};
    console.log(resultCoordinates);
    Object.values(resultCoordinates);
    setResult(resultCoordinates);
    setIsLoaded(true);
    
    
    
  }
  const ResultLocation = () => {
    GetData()

  }
  

  // useEffect(() => {
  //   console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=seattle&key=${process.env.REACT_APP_API_KEY}
  //   `)
  //                                                           // will put VV ${location1} from form?
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=seattle&key=${process.env.REACT_APP_API_KEY}
  //   `)
  //     .then((response) => {
  //       if (!response.ok) {
  //         console.log("response");
  //         throw new Error(`${response.status}: ${response.statusText}`);
  //       } else {
  //         return response.json()
  //       }
  //     })
  //     .then((jsonifiedResponse) => {
  //       const latLng1 = (jsonifiedResponse.results[0].geometry.location);
  //       console.log(latLng1);
  //       setFirstLocation(latLng1)
          
  //       })
  //       setIsLoaded(true);   
  //     // .catch((error) => {
  //     //   setError(error.message)
  //     //   setIsLoaded(true)
  //     // });
  // }, [])

  // useEffect(() => {
  //   console.log(`https://maps.googleapis.com/maps/api/geocode/json?address=${location2}&key=${process.env.REACT_APP_API_KEY}
  //   `)
  //                                                         // VV will put ${location2}
  //   fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${location2}&key=${process.env.REACT_APP_API_KEY}
  //   `)
  //     .then((response) => {
  //       if (!response.ok) {
  //         console.log("response");
  //         throw new Error(`${response.status}: ${response.statusText}`);
  //       } else {
  //         return response.json()
  //       }
  //     })
  //     .then((jsonifiedResponse) => {
  //       const latLng2 = (jsonifiedResponse.results[0].geometry.location);
  //       setSecondLocation(latLng2)
  //       console.log(secondLocation);     
  //       })
  //       setIsLoaded(true);   
  // }, [])
  
  
  // const handleFindingResultCoordinates = (latLng1, latLng2) => {
  //   let lat3 = (latLng1.lat + latLng2.lat) / 2
  //   let lng3 = (latLng1.lng + latLng2.lng) / 2
  //   const finalCoords = (lat3, lng3)
  //   console.log(finalCoords);
  //   setIsLoaded(true);
    
    
  // }

  
  
  
  
  let currentlyVisibleState = null;
  // if (error) {
  //   return <h1>Error: </h1>;

  // } else if (!isLoaded) {
  //   return <h1>...LOADING...</h1>;
  // } if (formVisibleOnPage) {
  //   currentlyVisibleState = <Form onFormSubmission={formSubmissionHandler}/>
  // } else if (!!showResult) {
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