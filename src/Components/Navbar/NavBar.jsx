import React from "react";
import { Link } from "react-router-dom";
import { MDBNavbar,
   MDBContainer,
  MDBBreadcrumb,
MDBBreadcrumbItem } from "mdb-react-ui-kit";

const NavBar = () => {
  
  return (
    
    <MDBNavbar expand='lg' light bgColor='light'>
    <MDBContainer fluid>
      <nav aria-label='breadcrumb'>
        <MDBBreadcrumb>
          <MDBBreadcrumbItem>
          <Link className= "link" to={"/"}><a href="/">Home</a></Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
          <Link className= "link" to={"/parks"}><a href="/parks">Find a Park</a></Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem active aria-current='page'>
          <Link className= "link" to={"/about"}><a href="/about">About Us</a></Link>
          </MDBBreadcrumbItem>
          <MDBBreadcrumbItem>
            <Link className="link" to={'/map'}><a href="/map">Map</a></Link>
          </MDBBreadcrumbItem>
        </MDBBreadcrumb>
      </nav>
    </MDBContainer>
  </MDBNavbar>
  );
};

export default NavBar;
