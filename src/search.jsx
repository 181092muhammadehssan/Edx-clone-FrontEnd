import React, { Component } from "react";
import "./search.css";
function Search(params) {
  return (
    <div className="div_search_0">
      <form action="">
        <input
          type="text"
          id="search1"
          className="search0"
          placeholder="Computer Science"
        />
      </form>
      <div className="div_search_1">
        <button className="div_search_btn">Search</button>
      </div>
    </div>
  );
}
export default Search;
