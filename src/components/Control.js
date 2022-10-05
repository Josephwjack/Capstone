import React, { useEffect, useState } from 'react';
import LocationForm from './LocationForm';
import Result from './Result';
import { db, auth }  from './../firebase';
import Spinner from 'react-bootstrap/Spinner';
import { collection, addDoc, doc, onSnapshot} from 'firebase/firestore';




function GetLocation() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [showResult, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coordinates, setCoordinates] = useState(null);

  
  const loadingSpinner = (
    <div className="loading">
      <Spinner className='spin1' animation='border' variant='dark'/>
      <Spinner className='spin2' animation='border' variant='dark'/>
      <Spinner className='spin3' animation='border' variant='dark'/>
    </div>
  )

  async function GetData(call) {
    setLoading(true);
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
    const resultCoordinates = {lat: lat3, lng: lng3};
    
    Object.values(resultCoordinates);
    setCoordinates(resultCoordinates);

    const url3 = (`https://maps.googleapis.com/maps/api/place/nearbysearch/json?types=restaurant&location=${lat3},${lng3}&radius=10000&key=${process.env.REACT_APP_API_KEY}`
       )
    const response = await Promise.all([fetch(url3)])
    const data3 = await response[0].json();
     
    
    console.log(data3);
    let restaurantList = data3.results.map(e => {
      return {name: e.name, rating: e.rating, vicinity: e.vicinity, location: e.geometry.location}
    });
    setResult(restaurantList);
    console.log(coordinates);
    console.log(restaurantList);
    setLoading(false);
    
    
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

  if (auth.currentUser == null && loading === false) {
    return (
      <div className="splash"><a href="/sign-in">
        <img className="splashImg animated fadeIn" src="https://iili.io/QBIlfa.md.png" alt="logo" />
        </a>
        {/* <h1>Please Sign In</h1> */}
      </div>
      
      
    )
  } else if (auth.currentUser != null) {
    
    let currentlyVisibleState = null;

  
  if (error) {
    currentlyVisibleState = <p>There was an error: {error}</p>

  } else if (loading) {
    return loadingSpinner;
  }
   if (formVisibleOnPage) {
    currentlyVisibleState = <LocationForm onFormSubmission={formSubmissionHandler}/>
  } 
   else if (!!showResult) {
    currentlyVisibleState = <Result location={coordinates} resultList={showResult}  />
  
   }
  
    return (
      <React.Fragment>  
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}
 



export default GetLocation;