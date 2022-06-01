import React, { Component } from "react";
import Select from "react-select";
import "./multiple.css";
function Filters() {
  var filters_subject = [
    {
      value: "Computer Science",
      label: "Computer Science",
    },
    {
      value: "Business",
      label: "Business",
    },
    {
      value: "Math",
      label: "Math",
    },
    {
      value: "Engineering",
      label: "Engineering",
    },
  ];
  return (
    <div>
      <Select
        isMulti
        options={filters_subject}
        placeholder="Subject"
        className="try"
      ></Select>
    </div>
  );
}
export default Filters;
