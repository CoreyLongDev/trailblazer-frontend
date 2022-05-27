import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import './view.css'
// import { MDBIcon } from 'mdb-react-ui-kit';
function View() {
    const [park, setPark] = useState([]);
    let {id} = useParams()
    const key = "EL1Bl0NrfZIjxhIIUVPEsrnWNz5o0cWaaKhvyWa7"
    const url = `https://developer.nps.gov/api/v1/parks?q=${id}&limit=10&api_key=${key}`;
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            console.log(res);
            setPark(res.data[0]);
          })
          .catch(console.error);
      }, []);
  return (
<>
    
    <div className='fullName'>
          <h1>{park.fullName}</h1>
          {/* <h4>{park.states}</h4> */}
      </div>
      
{/* 
      <span><h1>{park.fullName} ({park.states}) Facts</h1></span>
    <div className='parkfacts'>
    
    <strong>States: </strong> {park.states}           
    <br></br>
    <br></br>
    <strong>City: </strong> {park.addresses[0].city} 
    <br></br>
    <br></br>
     <strong>Directions:</strong> {park.directionsInfo}
    </div>
    
    <div className='parkfacts2'>
    <strong>Activities: </strong>
    <br></br>
    <br></br>
   {park.activities[0].name}, {park.activities[1].name}, {park.activities[2].name}, {park.activities[3].name}, {park.activities[4].name}, {park.activities[5].name}
   
   
   
   
   
    </div> */}
    
      
</>

  )
 
}

export default View