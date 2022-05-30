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

import React, { useState, useMemo, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import PopupCards from "../PopupCards/PopupCards";

const MapContainer = () => {
  const [selected, setSelected] = useState({});
  const [parks, setParks] = useState();
  const [latLong, setLatLong] = useState()

  const onSelect = (item) => {
    setSelected(item);
  };

  // const mapMarkers = locations
  // console.log(parks)
  // const latLongs = parks.map((park) => {
  //   return {
  //     id: park.id,
  //     name: park.fullName,
  //     location: { lat: Number(park.latitude), lng: Number(park.longitude) },
  //     description: park.description,
  //   };
  // });
  

  // console.log(latLongs)
  const mapStyles = {
    height: "100vh",
    width: "100%",
  };

  const center = useMemo(() => ({lat: 44.409286,lng: -68.247501}),[])

  useEffect(() => {
    fetch('https://fathomless-eyrie-16229.herokuapp.com/parks')
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setParks(res.data);
        setLatLong(res.map((element) => {
          return {
                id: element.id,
                name: element.fullName,
                location: { lat: Number(element.latitude), lng: Number(element.longitude) },
                description: element.description,
              }
        }))
      })
      .catch(console.error);
  }, []);

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={center}>
        {latLong && latLong.map((item) => {
          return (
            <Marker
              position={item.location}
              onClick={() => onSelect(item)}
            ></Marker>
          );
        })}
        {selected.location && (
          <InfoWindow
            position={selected.location}
            clickable={true}
            onCloseClick={() => setSelected({})}
          >
            <PopupCards selected={selected} />
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
