import React, {useEffect, useState} from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import MapContainer from '../Components/map/MapWrapper'

function Parks() {

  const [parks, setParks] = useState([]);

  const locations= parks.map(park=> park.latLong);

  
  const url = `https://fathomless-eyrie-16229.herokuapp.com/parks`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setParks(res.data);
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <MapContainer locations={locations}/>
        {/* <div><MapContainer/></div> */}
      </div>
    </>
  );
}
// locations = {locations} parks = {parks}

export default Parks;
