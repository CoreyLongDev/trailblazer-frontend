import React, {useEffect, useState} from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import MapContainer from '../Components/map/MapWrapper'

function Parks() {

  const [parks, setParks] = useState([]);
  const [mapCenter, setMapCenter] = useState(null)

  const locate = (parkLatLong) =>{
    setMapCenter(parkLatLong)
  }

  

  const locations= parks.map(park=> park.latLong);

  // const key = "EL1Bl0NrfZIjxhIIUVPEsrnWNz5o0cWaaKhvyWa7";

  
  const url = 'https://fathomless-eyrie-16229.herokuapp.com/parks';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setParks(res);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar setMapCenter = {locate} parks={parks}/>
        <MapContainer mapCenter = {mapCenter} parks = {parks}/>
        {/* <div><MapContainer/></div> */}
      </div>
    </>
  );
}
// locations = {locations} parks = {parks}

export default Parks;
