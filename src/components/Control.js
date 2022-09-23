import React, { useState } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import Form from './Form';
import Result from './Result';

Geocode.setApiKey("AIzaSyBmaYQc5LePgMNjP4Z6dRbmgKXl_BHJLAc");
Geocode.setLanguage("en");
Geocode.setRegion("us");

function GetLocation() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(true);
  const [showResult, setResult] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  Geocode.fromAddress().then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
    },
    (error) => {
      setError(error);
    }
  );

  handleMiddlePoint = () => {
    mylocation.lat
  }
}

export default GetLocation;