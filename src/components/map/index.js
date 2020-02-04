import React, {useState, useEffect} from 'react'
import { Map, Marker, InfoWindow, GoogleApiWrapper } from 'google-maps-react';
import {GOOGLE_MAPS_API_KEY} from '../../data/api_keys';
import './map.css';

function AppMap(props) {
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [activeMarker, setActiveMarker] = useState();
  const [infoWindowData, setInfoWindowData] = useState();
  const [markerData, setMarkerData] = useState();

  useEffect(()=>{
      async function getMarkerData(){
        var _data = await props.MapMarkerService.getMarkerData();
        setMarkerData(_data);
      }
      
      getMarkerData();
  },[]);    
  
  const onMarkerClick = (props, marker, e) =>{
    debugger;
    setInfoWindowData(props.flattenDataService.flattenData(marker.data));
    setActiveMarker(marker);
    setShowInfoWindow(true);
  }
 
  const onMapClicked = (props) =>{
    if (showingInfoWindow) {
      setInfoWindowData(null);
      setActiveMarker(null);
      setShowInfoWindow(false);
    }
  };


  return ( 
      <>
        {markerData?
          <Map google={props.google} onClick={onMapClicked} initialCenter={props.MapMarkerService.getInitialCenter()}>
            {markerData.map((marker, index) =>(
                <Marker key={`Marker ${index}`} onClick={onMarkerClick}
                    position={{lat: marker["latitude"], lng:  marker["longitude"]}}
                    name={marker.name} 
                    data={marker}
                    flattenDataService={props.FlattenDataService}
                    />
            ))}   
            <InfoWindow
                    marker={activeMarker}
                    visible={showInfoWindow}>
                      {infoWindowData? 
                      <table>
                        {Object.keys(infoWindowData).map((key, index) =>(
                          <tr key={`${key}${index}`}> <td>{key}</td><td>{infoWindowData[key]}</td></tr>
                        ))}
                      </table> : <></>}
                  </InfoWindow>       
            </Map> : <></>
        }
      </>        
      )
  1
}
export default GoogleApiWrapper({
  apiKey: (GOOGLE_MAPS_API_KEY)
 })(AppMap);