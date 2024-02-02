// src/components/MapContainer.js
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const MapContainer = (props) => {
  const { latitude, longitude } = props;

  const fetchNearbyHotels = (mapProps, map) => {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    const request = {
      location: map.center,
      radius: '5000', // radius in meters
      type: ['lodging'] // 'lodging' for hotels
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // Process the results to display hotels
        // For example, setting state to store hotel data
      }
    });
  };

  return (
    <Map
      google={props.google}
      zoom={14}
      style={mapStyles}
      initialCenter={{ lat: latitude, lng: longitude }}
      onReady={(mapProps, map) => fetchNearbyHotels(mapProps, map)}
    >
      <Marker position={{ lat: latitude, lng: longitude }} />
      {/* Additional markers for hotels can be added here */}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDw8x38SRRS6a_gP7VcwDDN5qu71jeNp7U'
})(MapContainer);
