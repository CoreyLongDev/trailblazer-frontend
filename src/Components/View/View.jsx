import React, { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';


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
            setPark(res.data);
          })
          .catch(console.error);
      }, []);
  return (
    <div>
    <h1>TESTING</h1>
    <h2>{park.fullName}</h2>

    </div>

  )
 
}

export default View