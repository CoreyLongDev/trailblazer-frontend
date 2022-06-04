import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./view.css";
import FeatComments from "../Feat-Comments/FeatComments";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
} from "mdb-react-ui-kit";
// import { MDBIcon } from 'mdb-react-ui-kit';
function View() {
  const [park, setPark] = useState(null);
  let { id } = useParams();
  // const key = "EL1Bl0NrfZIjxhIIUVPEsrnWNz5o0cWaaKhvyWa7"
  const url = `https://fathomless-eyrie-16229.herokuapp.com/parks/${id}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPark(res);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      {park && (
        <>
          <div className="fullName">
            <h1>{park.fullName}</h1>
            {park.addresses[0].line1}
            <br></br>
            {park.addresses[0].city} |{park.addresses[0].stateCode} |{" "}
            {park.addresses[0].postalCode}
            <h1>Hours: </h1>
            <strong>Monday:</strong>{" "}
            {park.operatingHours[0].standardHours.monday}
            <br></br>
            <strong>Tuesday:</strong>{" "}
            {park.operatingHours[0].standardHours.tuesday}
            <br></br>
            <strong>Wednesday:</strong>{" "}
            {park.operatingHours[0].standardHours.wednesday}
            <br></br>
            <strong>Thursday:</strong>{" "}
            {park.operatingHours[0].standardHours.thursday}
            <br></br>
            <strong>Friday: </strong>{" "}
            {park.operatingHours[0].standardHours.friday}
            <br></br>
            <strong>Saturday:</strong>{" "}
            {park.operatingHours[0].standardHours.saturday}
            <img
              height="100%"
              width="100%"
              src={park.images[0].url}
              alt="..."
            ></img>
          </div>

          <div className="info">
            {" "}
            <span>
              <h1>{park.fullName} Facts</h1>
            </span>
          </div>

          <div className="parkfacts">
            <strong>States: </strong> {park.states}
            <br></br>
            <strong>City: </strong> {park.addresses[0].city}
            <br></br>
            <strong>Directions:</strong> {park.directionsInfo}
          </div>

          <div className="parkfacts2">
            <strong>
              <h1>Activities:</h1>{" "}
            </strong>
            <br></br>
            <div>
              {park.activities.map((item) => (
                <button>{item.name}</button>
              ))}
            </div>

            <br></br>
            <br></br>
          </div>

          <div>
            <h1>Pictures</h1>
            <MDBCarousel showControls fade>
              <MDBCarouselInner>
                <MDBCarouselItem className="active">
                  <MDBCarouselElement src={park.images[1].url} alt="..." />
                </MDBCarouselItem>
                {park.images[2] && (
                  <MDBCarouselItem>
                    <MDBCarouselElement src={park.images[2].url} alt="..." />
                  </MDBCarouselItem>
                )}
                {park.images[3] && (
                  <MDBCarouselItem>
                    <MDBCarouselElement src={park.images[3].url} alt="..." />
                  </MDBCarouselItem>
                )}
              </MDBCarouselInner>
            </MDBCarousel>
          </div>

          <div className="text">
            <h1>{park.fullName} Description</h1>
            {park.description}
            <br></br>
            <br></br>
          </div>
          <hr></hr>
          <div className="comments">
            <FeatComments park={park} parkID={id} />
          </div>
        </>
      )}
    </div>
  );
}

export default View;
