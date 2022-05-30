import React from "react";
import { Link } from "react-router-dom";

function PopupCards({ selected }) {
  return (
    <>
      <h5>{selected.name}</h5>
      <p style={{ fontSize: "1rem" }}>{selected.description}</p>
      <div className="d-flex p-2">
        <Link to={`/${selected.id}/view`}>
          <button
            style={{ position: "absolute", right: "0", bottom: "0" }}
            href="#"
            className="btn btn-md btn-primary"
          >
            Visit
          </button>
        </Link>
      </div>
    </>
  );
}

export default PopupCards;
