import React from "react";

class Boton extends React.Component {
  render() {
    return (
      <button className="btn btn-info" onClick={this.props.onClick}>
        suma 1
      </button>
    );
  }
}

export default Boton;
