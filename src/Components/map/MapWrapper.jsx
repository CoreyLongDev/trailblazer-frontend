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
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


const MapContainer = ({locations, parks}) => {

    const mapMarkers = locations
    console.log(parks)
    const latLongs = parks.map(park => {
      return {lat : Number(park.latitude), lng: Number(park.longitude)}
    })
  
    console.log(latLongs)
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  


  const defaultCenter = {
    lat: 44.409286, lng: -68.247501
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyDcKO1c_r8IdTbTpTj4rOBgx7lzhOiIsH4'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
            {latLongs.map(item => {
              return (
                <Marker position ={item}
                ><i class="fa-regular fa-trees"></i></Marker>
                
              )
            })}
          </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;
