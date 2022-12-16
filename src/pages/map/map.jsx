import React, { useRef, useEffect } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css'
import MapForms from './mapforms';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFkb25hbGQ3MiIsImEiOiJjbGIzZ3pwOTgwZWE2M3BuM2RiZmJoNzg5In0.jHzCWs3yWq2hNe4Mr1bJVw';

export default function Map() {
  const mapContainer = useRef(null);
  const map = useRef(null);

  const draw = new MapboxDraw({
    displayControlsDefault: false,
    // Select which mapbox-gl-draw control buttons to add to the map.
    controls: {
      polygon: true,
      trash: true,
      
    },
    // Set mapbox-gl-draw to draw by default.
    // The user does not have to click the polygon control button first.
    defaultMode: 'draw_polygon'
    });

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/jadonald72/clbdohinu000814pmlla9de2w',
      center: ['-99.1714', '38.8513'],
      attributionControl: false,
      zoom: '4',
      projection: 'mercator'
    });
   map.current.addControl(new mapboxgl.NavigationControl({showCompass:false}));
   map.current.addControl(draw, 'bottom-right');
  });



   

  return (
    <div className='position-relative'>
      <MapForms />
      
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
