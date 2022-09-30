
// Convert from degrees to radians
// function degreesToRadians(degrees) {
//   var radians = (degrees * Math.PI)/180;
//   return radians;
// }



// const makeApiCall = async () => {
  //   let response;
    
  //   try {
  //     response = await fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?address=Seattle+wa&key=${process.env.REACT_APP_API_KEY}`
  //     )
  //   } catch(error){
  //     console.log(error, "fetch error");
  //   }
  //   let data;
  //   try {
  //     data = await response.json();
  //     console.log(data);
  //   } catch(error){
  //     console.log(error, "response error");
  //   }
  //   const firstCoords = data.results.map(ele => {
  //     return {location: ele.geometry.location}
  //   });
  //   console.log(firstCoords);
  //   setFirstLocation(firstCoords);
  //   setIsLoaded(true)
  // };

  

  // const formSubmissionHandler = (e, location1, location2) => {
  //   e.preventDefault();
  //   makeApiCall({
  //     location1: location1,
  //     location2: location2,
  //   })
  // }
  //   });
  //   setFormVisibleOnPage(!formVisibleOnPage);
  //   return false;
  // }


  //-----------------------------------------
  // Geocode.setApiKey(process.env.REACT_APP_API_KEY)
  // Geocode.setLanguage("en");
  // Geocode.setRegion("us");
  
  
  // Geocode.fromAddress(location1).then(
  //   (response) => {
  //     const { lat, lng }= response.results[0].geometry.location;
  //     console.log(lat, lng);
  //   },
  //   (error) => {
  //     setError(error.message);
  //   }
  // );
  // Geocode.fromAddress(location2).then(
  //   (response) => {
  //     const { lat2, lng2 }= response.results[0].geometry.location;
  //     console.log(lat2, lng2);
  //   },
  //   (error) => {
  //     setError(error.message);
  //   }
  // );