import React from "react";
import "./Sidebar.css";

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
        <ul>
          <li>Cards render here</li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
