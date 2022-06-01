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

  const key = "EL1Bl0NrfZIjxhIIUVPEsrnWNz5o0cWaaKhvyWa7";
  const url = `https://developer.nps.gov/api/v1/parks?&limit=10&api_key=${key}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setParks(res.data);
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
              className="text-black p-0 searchIcon "
              fas
              size="lg"
              icon="search-location"
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
            <div className="dataResult">
              {filteredParks.slice(0, 15).map((park, key) => (
                // slice method keeps it from showing EVERYTHING. Will keep it to best 15 options
                <a
                  key={key}
                  className="dataItem"
                  href={`${park.id}/view`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p> {park.fullName}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};
