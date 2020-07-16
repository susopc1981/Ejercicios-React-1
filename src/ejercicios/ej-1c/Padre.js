import React from "react";
import Hijo from "./Hijo";

class Padre extends React.Component {
  constructor() {
    super();
    this.text = "Hola Mundo";
  }

  render() {
    return (
      <div className="alert alert-primary">
        <h4>Padre</h4>
        <Hijo data={this.text} />
      </div>
    );
  }
}

export default Padre;
