import React, { useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import Form from './Form';
import Result from './Result';

Geocode.setApiKey(["my api key"]);
Geocode.setLanguage("en");
Geocode.setRegion("us");

function GetLocation() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [showResult, setResult] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [mylocation, setMylocation] = useState("");
  const [secondLocation, setSecondLocation] = useState("")


  Geocode.fromAddress().then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      setMylocation(lat, lng);
    },
    (error) => {
      setError(error.message);
    }
  );

  handleMiddlePoint = () => {
    mylocation.lat
  }
}

export default GetLocation;