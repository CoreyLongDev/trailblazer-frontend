import React, { useEffect, useState } from 'react'
import { GoogleMap, useLoadScript} from '@react-google-maps/api'
import './Map.css'


const MapWrapper = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyATCjfZiX2detwHsNbc_nOpyh3d3TKi0To"
    })

    if(!isLoaded) return<div>Loading</div>
    return(
        <Map/>
    )
}

const Map = () => {
    const [data, setData] = useState()

    useEffect(() => {
        fetch("")
        .then(res => res.json())
        .then(data => setData(data))
        .catch(console.error)
    }, [])

    return (<GoogleMap zoom={10} center={{lat:44, lng: -80}} mapContainerClassName="map-container">
        {data
        ? data.map(element => {
            console.log(element)
        })
        : null
        }
    </GoogleMap>)
}

export default MapWrapper
