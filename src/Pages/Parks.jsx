import React, {useEffect, useState} from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import MapContainer from '../Components/map/MapWrapper'

function Parks() {

  const [parks, setParks] = useState([]);

  const locations= parks.map(park=> park.latLong);

  const key = "EL1Bl0NrfZIjxhIIUVPEsrnWNz5o0cWaaKhvyWa7";

  
  const url = `https://developer.nps.gov/api/v1/parks?&limit=10&api_key=${key}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setParks(res.data);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MapContainer/>
        {/* <div><MapContainer/></div> */}
      </div>
    </>
  );
}
// locations = {locations} parks = {parks}

export default Parks;
