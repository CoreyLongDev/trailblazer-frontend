import React from "react";
import { Link } from "react-router-dom";
import {
  MDBNavbar,
  MDBContainer,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
} from "mdb-react-ui-kit";
import { SearchBar } from "../Searchbar/SearchBar";
import "./NavBar.css";

const NavBar = () => {
  return (
    <MDBNavbar expand="lg" style={{ backgroundColor: "blue", padding: "0" }}>
      <MDBContainer
        fluid
        style={{
          backgroundColor: "gray",
          maxHeight: "300px",
        }}
      >
        <nav aria-label="breadcrumb">
          <MDBBreadcrumb>
            <MDBBreadcrumbItem>
              <Link className="link" to={"/"}>
                <a href="/">Home</a>
              </Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem>
              <Link className="link" to={"/parks"}>
                <a href="/parks">Find a Park</a>
              </Link>
            </MDBBreadcrumbItem>
            <MDBBreadcrumbItem active aria-current="page">
              <Link className="link" to={"/about"}>
                <a href="/about">About Us</a>
              </Link>
            </MDBBreadcrumbItem>
          </MDBBreadcrumb>
        </nav>
        <SearchBar />
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NavBar;
