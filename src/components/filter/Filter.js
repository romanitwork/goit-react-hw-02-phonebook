import React from "react";

const Filter = ({ getName }) => {
  return (
    <>
      <h2>Find contact by name...</h2>
      <input type="text" onChange={getName} />
    </>
  );
};

export default Filter;
