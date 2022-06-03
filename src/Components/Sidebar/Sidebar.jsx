import React from "react";
import "./Sidebar.css";
import ParkList from "../ItemLists/ParkList";

function Sidebar({setMapCenter, parks}) {
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
        <ParkList setMapCenter={setMapCenter} parks={parks} />
      </div>
    </>
  );
}

export default Sidebar;
