import React from "react";

// HOLA

const Hijo = (props) => {
  return (
    <div className="alert alert-success">
      <h4>Hijo</h4>
      <h1>{props.data}</h1>
    </div>
  );
};

export default Hijo;
