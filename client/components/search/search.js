import React from "react";

export default function Search() {
  return (
    <div className="col-3 d-flex flex-row justify-content-center align-items-start">
      <input
        className="form-control mr-sm-2 rounded-pill"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0 mx-4 " type="submit">
        Search
      </button>
    </div>
  );
}
