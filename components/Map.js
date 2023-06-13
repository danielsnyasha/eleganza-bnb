import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';
import { getCenter } from 'geolib/es/getCenter';

export default function Map({info_data}) {
    const [viewport, setViewport] = useState({
        width: '100%',
        height:'100%',
        longitude: -0.0022275,
      latitude: 51.5421655,
      zoom: 10
    })
    
  return (
    <ReactMapGL
    mapStyle='mapbox://styles/danielsnyasha/clisx5hc3003k01pn2x8jdjw0'
    mapboxAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewPortChange={(nextViewPort) => setViewport(nextViewPort)}>


    </ReactMapGL>
  )
}
