import React, {useEffect, useRef, useState} from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import './map.css';
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import {fetchLocations} from "../features/locations/locationThunks";
import {useDispatch, useSelector} from "react-redux";

export default function Map(props) {
  const dispatch = useDispatch();
  const locations = useSelector(state => state.locations);

  const mapContainerRef = useRef();
  const map = useRef(null);
  const [lng] = useState(props.lng || -104.991531);
  const [lat] = useState(props.lat || 39.742043);
  const [style] = useState('https://devtileserver.concept3d.com/styles/c3d_default_style/style.json');
  const [zoom] = useState(14);

  useEffect(() => {
    if (map.current) return;
    map.current = new maplibregl.Map({
      container: mapContainerRef.current,
      style,
      center: [lng, lat],
      zoom
    });
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
        point: true,

      }
    });
    map.current.addControl(draw, 'top-left');
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    
    map.current.on('draw.create', newDraw);
    map.current.on('draw.delete', newDraw);
    map.current.on('draw.update', newDraw);

    function newDraw(e) {
      const data = draw.getAll();
      console.log("data:", data);
    }

    dispatch(fetchLocations());

    return () => {
      map.current.remove();
    }
  }, [dispatch, lat, lng, style, zoom]);

  useEffect(() => {
    if (!map.current || !locations?.length) return;

    // TODO: make sure this doesn't produce duplicate location markers
    locations.forEach(location => {
      const marker = new maplibregl.Marker()
      marker.setLngLat([location.lng, location.lat]).addTo(map.current)
    })
  }, [locations])

  return (
      <div className="map-wrap">
        <a href="https://www.maptiler.com" className="watermark"><img
            src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a>
        <button className="add-location-fab" >
          +
        </button>
        <div ref={mapContainerRef} className="map"/>
      </div>
  );
}
