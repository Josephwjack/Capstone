import React from 'react';
import { Map, GoogleApiWrapper } from 'google-map-react';

const mapStyles = {
  width: '99vw',
  height: 'auto',
  frameborder: '0',
  style: 'border:0',
  margin: '0 auto',
}

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
        lat: this.props.lat,
        lng: this.props.long
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY
})(MapContainer);