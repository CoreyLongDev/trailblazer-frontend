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
      <div style={{ height: "10rem", textAlign: "center" }}>
        <MDBCardImage
          style={{ height: "10rem" }}
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
        <MDBCardTitle>{park.fullName}</MDBCardTitle>
        <MDBCardText>
          <div>
            {park.addresses[0].city}, {park.addresses[0].stateCode}
          </div>
        </MDBCardText>
        <div>
          <MDBBtn
            style={{ position: "absolute", right: "0", bottom: "0" }}
            href="#"
          >
            View
          </MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
