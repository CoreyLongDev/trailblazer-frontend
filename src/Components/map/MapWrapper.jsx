import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, LoadScript} from '@react-google-maps/api'
import './map.css'

const containerStyle = {
    width: "100%",
    height: "100vh"
}

const center = {
    lat: 44,
    lng: -80
}

const markerIcon = 'tomato.jpg'


const MapWrapper = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("https://fathomless-eyrie-16229.herokuapp.com/trails")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(console.error)
    }, [])


    return(
        <LoadScript
            googleMapsApiKey='AIzaSyATCjfZiX2detwHsNbc_nOpyh3d3TKi0To'
        >
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                <Marker 
                position={{lat: 44.00947, lng: -80.00190}}
                />
            
            </GoogleMap>
        </LoadScript>
    )
}

// const Map = () => {
    

//     return (<GoogleMap zoom={10} center={{lat:44, lng: -80}} mapContainerClassName="map-container">
//         {/* {data
//         ? data.map((element, index) => {
//             const {lat, lon} = element.latlon
//             let lng = lon
//             console.log(lat)
//             console.log(lon)
//             return <Marker position={{lat: 44, lng:-88}}/>
//         })
//         : null
//         } */}
//         {/* <Marker position={{lat: 44, lng:-88}}/> */}
//     </GoogleMap>)
// }

export default React.memo(MapWrapper)
