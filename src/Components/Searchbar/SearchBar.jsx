// Reference: https://www.youtube.com/watch?v=x7niho285qs

import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import { MDBIcon } from "mdb-react-ui-kit";

export const SearchBar = () => {
  const [parks, setParks] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);
  const [wordEntered, setWordEntered] = useState([""]);

  const handleFilter = (e) => {
    e.preventDefault();
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = parks.filter((value) => {
      return value.fullName.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredParks([]);
    } else {
      setFilteredParks(newFilter);
    }
  };

  const url = "https://fathomless-eyrie-16229.herokuapp.com/parks";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setParks(res);
      })
      .catch(console.error);
  }, []);

  const clearInput = () => {
    setFilteredParks({});
    setWordEntered("");
  };

  return (
    <>
      {!parks ? (
        <h1>loading...</h1>
      ) : (
        <div className="search">
          <div className="searchInputs">
            <input
              type="text"
              placeholder="Search National Parks"
              onChange={handleFilter}
              value={wordEntered}
            />
            <MDBIcon
              className="text-#dda15e p-0 searchIcon "
              fas
              size="lg"
              icon="search-location"
              // Color of the magnifying glass is handled under src/Components/Navbar in-line at the MDBContainer
            />

            {/* !!!!!!!!!!!!!!! */}
            {/* ternary below on filteredParks not functional. It creates an X button to clear input field, but breaks the page. See Console for error */}
            {/* !!!!!!!!!!!!!!! */}

            {/* {filteredParks.length === 0 ? (
              <MDBIcon
                className="text-white p-0 searchIcon "
                fas
                size="lg"
                icon="search-location"
              />
            ) : (
              <MDBIcon
                className="text-white p-0 searchIcon clearBtn"
                fas
                icon="times"
                size="lg"
                onClick={clearInput}
              />
            )} */}
          </div>
          {filteredParks.length !== 0 && (
            <ul className="dataResult">
              {filteredParks.slice(0, 15).map((park, key) => (
                // slice method keeps it from showing EVERYTHING. Will keep it to best 15 options
                <li>
                  {" "}
                  <a
                    key={key}
                    className="dataItem"
                    href={`/${park._id}/view`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p> {park.fullName}</p>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};
