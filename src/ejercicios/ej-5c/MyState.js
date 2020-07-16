import React from "react";

class MyState extends React.Component {
  constructor() {
    super();
    this.myText = "Hola Bebeeees";
  }
  render() {
    return (
      <div className="alert alert-primary">
        <p>
          El valor por defecto del estado es: {this.myText}
          {/* Muestra aquí el valor por defecto del estado */}
        </p>
      </div>
    );
  }
}

export default MyState;
