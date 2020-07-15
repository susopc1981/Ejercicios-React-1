import React from "react";

const MyLabel = (props) => {
  return (
    <p>
      <b>
        Has dado {props.clicks}
        {/* Ingresa aquí el número de clicks */} clicks
      </b>
    </p>
  );
};

export default MyLabel;
