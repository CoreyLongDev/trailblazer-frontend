import React from "react";
import "./Sidebar.css";
import ParkList from "../ItemLists/ParkList";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <h2 className="sidebar-header">National Parks</h2>
        <hr
          style={{
            borderTop: "1.5px solid black",
            width: "90%",
          }}
        />
        <ParkList />
      </div>
    </>
  );
}

export default Sidebar;
