import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useLocation, Link, Route, Routes } from "react-router-dom";
import View from "../View/View";

export default function Card({ park }) {
  return (
    <MDBCard style={{ height: "100%", margin: ".5rem", minWidth: "20vw" }}>
      <div style={{ height: "10rem", textAlign: "center" }}>
        <MDBCardImage
          style={{ height: "10rem" }}
          src={park.images[0].url}
          fluid
          alt={park.name}
        />
      </div>
      
      <MDBCardBody>
        <MDBCardTitle>{park.fullName}</MDBCardTitle>
        <MDBCardText>
          <div>
            {park.addresses[0].city}, {park.addresses[0].stateCode}
          </div>
        </MDBCardText>
        <div>
            <Link to= {`/${park.id}/view` }state={park}>
                
        <button
            style={{ position: "absolute", right: "0", bottom: "0" }}
            href="#"
            className="btn btn-primary"

          >
          
            View
          </button>
          </Link>
        </div>
        
      </MDBCardBody>
      
    </MDBCard>
    
  );
}
