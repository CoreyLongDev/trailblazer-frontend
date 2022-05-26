import React from "react";
import "./Sidebar.css";
import { Index } from "../../Pages/Index";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <h2>Your Parks</h2>
        <hr
          style={{
            borderTop: "3px solid #bbb",
            width: "80%",
          }}
          class="solid"
        />
        <Index />
      </div>
    </>
  );
}

export default Sidebar;
