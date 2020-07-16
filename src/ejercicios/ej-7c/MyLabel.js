import React from "react";

class MyLabel extends React.Component {
  render() {
    return (
      <p>
        <b>
          Has dado {this.props.clicks}
          {/* Ingresa aquí el número de clicks */} clicks
        </b>
      </p>
    );
  }
}

export default MyLabel;
