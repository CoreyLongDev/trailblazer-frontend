import React from "react";
import {
  MDBCard,
  MDBCardOverlay,
  MDBCardTitle,
  MDBContainer,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Welcome = () => {
  return (
    <>
      {/* START HERO BANNER */}
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: 400,
          marginTop: ".5rem",
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            margin: "0 auto",
            top: "50%",
            transform: "translateY(50%)",
          }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Trail Blazers</h1>
              <hr
                style={{
                  borderTop: "3px solid #bbb",
                }}
                class="solid"
              />
              <h2>Choose your own adventure</h2>
            </div>
          </div>
        </div>
      </div>

      {/* END HERO BANNER*/}
      {/* START NPI CARDS */}

      <MDBContainer
        className="d-flex flex-md-row  mb-3  "
        style={{ marginTop: ".5rem", justifyContent: "space-evenly" }}
      >
        {/* CARD 1 */}
        <MDBCard background="dark" className="text-white w-25">
          <MDBCardImage
            overlay
            src="https://pixabay.com/get/gdbd09178b8891cf21e26c2317b0cf3a40e5be62548126af185859010e0c983bdb816c3e16c1e148cc2abe8c16b7a2f09_1280.jpg"
            className="h-100"
            alt="trails"
          />
          <MDBCardOverlay>
            <MDBCardTitle>hike</MDBCardTitle>
          </MDBCardOverlay>
        </MDBCard>
        {/* END CARD 1 */}

        {/* CARD 2 */}
        <MDBCard background="dark" className="text-white w-25">
          <MDBCardImage
            overlay
            src="https://pixabay.com/get/g0a1d6935049a2fcf98384885236644cf8b9c04c68038d0302ea3702cc6d82805a59de7d828aa5521aceb92d35eeb844a068a72bd9b8632803a3df0c6db97da51_1280.jpg"
            alt="national parks"
            className="h-100"
          />
          <MDBCardOverlay>
            <MDBCardTitle>see</MDBCardTitle>
          </MDBCardOverlay>
        </MDBCard>
        {/* END CARD 2 */}

        {/* CARD 3 */}
        <MDBCard background="dark" className="text-white w-25">
          <MDBCardImage
            overlay
            src="https://pixabay.com/get/g321f6de59f077f7d4e6177cad7e4cb1912754dd8f44510aeeb843a1a517f03b0113284540afd286e0bafb06fd4cbbf58_640.jpg"
            alt="hot springs"
            className="h-100"
          />
          <MDBCardOverlay>
            <MDBCardTitle>soak</MDBCardTitle>
          </MDBCardOverlay>
        </MDBCard>
        {/* END CARD 3 */}
      </MDBContainer>
    </>
  );
};

export default Welcome;
