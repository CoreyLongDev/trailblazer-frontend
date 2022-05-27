import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import './view.css'
// import { MDBIcon } from 'mdb-react-ui-kit';
function View() {
    const [park, setPark] = useState(null);
    let {id} = useParams()
    const key = "EL1Bl0NrfZIjxhIIUVPEsrnWNz5o0cWaaKhvyWa7"
    const url = `https://developer.nps.gov/api/v1/parks?q=${id}&limit=10&api_key=${key}`;
    useEffect(() => {
        fetch(url)
          .then((res) => res.json())
          .then((res) => {
            console.log(res.data[0]);
            setPark(res.data[0]);
          })
          .catch(console.error);
      }, []);
  return (
<>
    
    {park && (
      <>
      <div className='fullName'>
          <h1>{park.fullName}</h1>
          <h4>{park.states}</h4>
          <img height="100%" width="100%" src={park.images[0].url} alt ='image'></img>
      </div>
      

      <span><h2>{park.fullName} ({park.states}) Facts</h2></span>
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
   
   </div>

   <div className='text'>

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
<br></br>
<br></br>
  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>  

   </div>
      </>

    )} 

   
    
      
</>

  )
 
}

export default View