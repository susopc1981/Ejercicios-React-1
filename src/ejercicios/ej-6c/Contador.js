import React from "react";

class Contador extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  sumaClick = () => {
    this.setState({ ...this.state, count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="alert alert-primary">
        <p>
          <b>
            Has dado {this.state.count}
            {/* Ingresa aquí el número de clicks */} clicks
          </b>
        </p>
        <button className="btn btn-info" onClick={this.sumaClick}>
          suma 1
        </button>
      </div>
    );
  }
}

// const Contador = () => {

//     const sumaClick = () => {
//         // Ingresa aquí tu código para aumentar el contador
//     }

//     return (
//         <div className="alert alert-primary">
//             <p><b>Has dado {/* Ingresa aquí el número de clicks */} clicks</b></p>
//             <button className="btn btn-info" onClick={sumaClick}>suma 1</button>
//         </div>
//     );
// };

export default Contador;
