import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="navBar">
        <li><Link className= "link" to={"/"}><h1>Home</h1></Link></li>
        <li><Link className= "link" to={"/parks"}><h1>Find a Park</h1></Link></li>
        <li><Link className= "link" to={"/about"}><h1>About Us</h1></Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
