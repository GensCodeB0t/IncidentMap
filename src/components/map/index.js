import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';
import './map.css';

function AppMap(props) {
 
  const onMapClicked = (props) =>{
    console.log("Test");
  };


  return ( 
      <>
          <Map google={props.google} onClick={onMapClicked}></Map> 
      </>        
      )
  1
}
export default GoogleApiWrapper({
  apiKey: ('')
 })(AppMap);