import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function Card({ park }) {
  return (
    <MDBCard style={{ height: "100%", margin: ".5rem", minWidth: "20vw" }}>
      <div
        className="bg-image"
        style={{ height: "15rem", textAlign: "center" }}
      >
        <MDBCardImage
          style={{ height: "15rem" }}
          src={park.images[0].url}
          fluid
          alt={park.name}
        />
      </div>
      {/* <a>
        <div
          className="mask overlay"
          style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
        ></div>
      </a> */}
      <MDBCardBody>
        <MDBCardTitle>{park.name}</MDBCardTitle>
        <MDBCardText>{park.description}</MDBCardText>
        <div>
          <MDBBtn href="#">View</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
