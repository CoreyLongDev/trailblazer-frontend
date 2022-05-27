// import React, { useEffect, useState, useMemo } from 'react'
// import { GoogleMap, useLoadScript,Marker} from '@react-google-maps/api'
// import './map.css'


// const MapWrapper = () => {

//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: ''
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

import React, {useState} from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';


const MapContainer = ({locations, parks}) => {

  const [selected, setSelected] = useState({})

  const onSelect = item => {
    setSelected(item)
}

    // const mapMarkers = locations
    // console.log(parks)
    const latLongs = parks.map(park => {
      return {name: park.fullName, location: {lat : Number(park.latitude), lng: Number(park.longitude)}}
    })

    console.log(latLongs)
  
    // console.log(latLongs)
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  


  const defaultCenter = {
    lat: 44.409286, lng: -68.247501
  }
  
  return (
     <LoadScript
       googleMapsApiKey=''>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
            {latLongs.map(item => {
              return (
                <Marker position ={item.location} onClick= {()=> onSelect(item)} 
                ></Marker>
                
              )
            })}
            {
                selected.location && 
                (
                   <InfoWindow position={selected.location} clickable = {true} onCloseClick = {() => setSelected({})}>
                       <p>{selected.name}</p>
                   </InfoWindow>    
                )
            }
            
          </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;
