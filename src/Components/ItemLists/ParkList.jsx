import React, { useState, useEffect } from "react";
import Card from "../Content/Card";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

const ParkList = ({setMapCenter, parks}) => {
  return (
    <>
      <MDBContainer>
        <MDBRow className="mb-3">
          {parks.map((park) => (
            <MDBCol
              style={{ padding: "0", marginBottom: ".5rem" }}
              md="8"
              className="col-example"
            >
              <Card setMapCenter= {setMapCenter} park={park} />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default ParkList;
