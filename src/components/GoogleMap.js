import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker';
import '../map.css';

export const LocationPin = ({ resultCoordinates }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-icon">{resultCoordinates}</p>
  </div>
)

function Map(){
  const defaultProps = {
    center: {
      lat: 40.915488,
      lng:  -96.677629
    },
    zoom: 4
  };

  return (

    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <LocationPin
          lat={{lat3}}
          lng={{lng3}}
          text={`MidPoint`}
        />
      </GoogleMapReact>
    </div>
  );
  }

export default Map;

