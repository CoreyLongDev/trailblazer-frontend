// import React, { useEffect, useState, useMemo } from 'react'
// import { GoogleMap, useLoadScript,Marker} from '@react-google-maps/api'
// import './map.css'


// const MapWrapper = () => {

//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: 'AIzaSyDcKO1c_r8IdTbTpTj4rOBgx7lzhOiIsH4'
//     })

//     if(!isLoaded) return<div>Loading</div>
//     return <Map/>
    
// }

// function Map() {
//     return <GoogleMap zoom= {10} center={{lat:44, lng: -80}} mapContainerClassName="map-container"></GoogleMap>
// }
// //     useEffect(() => {
// //         fetch("")
// //         .then(res => res.json())
// //         .then(data => setData(data))
// //         .catch(console.error)
// //     }, [])

// //     return (<GoogleMap zoom={10} center={{lat:44, lng: -80}} mapContainerClassName="map-container">
// //         {data
// //         ? data.map(element => {
// //             console.log(element)
// //         })
// //         : null
// //         }
// //     </GoogleMap>)
// // }

// export default MapWrapper

import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const MapContainer = ({locations, parks}) => {

    const mapMarkers = locations
    const parkdata = {parks}
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  


  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDcKO1c_r8IdTbTpTj4rOBgx7lzhOiIsH4'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default MapContainer;
