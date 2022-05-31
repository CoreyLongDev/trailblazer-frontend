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
import "../Sidebar/Sidebar.css";

export default function Card({ setMapCenter, park }) {


  return (
    <MDBCard
      style={{
        height: "90%",
        margin: ".25rem",
        display: "flex",
        flexDirection: "row",
        width: "144%",
      }}
      className="card"
    >
      <div
        style={{
          height: "100%",
          minWidth: "125px",
          maxWidth: "125px",
          textAlign: "center",
        }}
      >
        <MDBCardImage
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
          src={park.images[0].url}
          fluid
          alt={park.name}
        />
      </div>

      <MDBCardBody
        style={{ textAlign: "right", paddingRight: "6px" }}
        className="card-body"
      >
        <MDBCardTitle className="mb-0">{park.fullName}</MDBCardTitle>
        <MDBCardText>
          <div>
            {park.addresses[0].city}, {park.addresses[0].stateCode}
          </div>
        </MDBCardText>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <button onClick={()=>setMapCenter({ lat: Number(park.latitude), lng: Number(park.longitude) })} className="btn btn-sm btn-secondary ">Locate</button>
          <Link to={`/${park.id}/view`} target="_blank" state={park}>
            <button className="btn btn-sm btn-primary">Visit</button>
          </Link>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
}
