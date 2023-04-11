import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZnJvbmNlbWUiLCJhIjoiY2xnY2lzcGl1MDBhOTNsbW16ODRzYjZmMyJ9.tNNsDS9trjnNDqfrf_G-Nw';

function ContactMap() {
  useEffect(() => {
    const longitude = -122.4194;
    const latitude = 37.7749; 

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 12,
    });

    // Add map controls and layers here

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '500px' }} />;
}

export default ContactMap;
