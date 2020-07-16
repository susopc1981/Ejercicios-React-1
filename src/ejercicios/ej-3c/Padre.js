import React from "react";
import Hijo from "./Hijo";

class Padre extends React.Component {
  printCustomText = (text) => {
    console.log(text);
  };
  render() {
    return (
      <div className="alert alert-primary">
        <h4>Padre</h4>
        <Hijo data={this.printCustomText} />
      </div>
    );
  }
}
// const Padre = () => {
//     const printCustomText = (text) => {
//         console.log(text);
//     };

//     return (
//         <div className="alert alert-primary">
//             <h4>Padre</h4>
//             <Hijo />
//         </div>
//     );
// };

export default Padre;
