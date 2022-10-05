import React from 'react';
import '../App.css';
import '../Assets/css/map.css';
import Control from './Control';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Header from './Header';
// import GoogleMapReact from 'google-map-react';
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker';

// const LocationPin = ({ text }) => (
//   <div className="pin">
//     <Icon icon={locationIcon} className="pin-icon" />
//     <p className="pin-text">{text}</p>
//   </div>
// )

// function SimpleMap(){
//   const defaultProps = {
//     center: {
//       lat: 40.915488,
//       lng:  -96.677629
//     },
//     zoom: 4
//   };

//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '50vh', width: '100%' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//       >
//         <LocationPin
//           lat={39.8283}
//           lng={98.5795}
//           text={location.address}
//         />
//       </GoogleMapReact>
//     </div>
//   );
//     }
function App() {
  return (
    <React.Fragment>
      <Control/>
      <SimpleMap/>
    </React.Fragment>
  );
}

export default App;
