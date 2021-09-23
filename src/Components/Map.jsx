import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { Container, Grid } from '@material-ui/core';
 

const containerStyle = { 
    height: '500px'
  }

export class MapContainer extends React.Component {
   
    render() {
    return (
      <div style={{height:"500px", paddingBottom:100}}>
      <Map containerStyle={containerStyle} google={this.props.google} zoom={15} initialCenter={{
        lat: 30.316496,
        lng: 78.032188
      }}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_API_KEY)
})(MapContainer)