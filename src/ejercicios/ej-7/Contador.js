import React, { useState } from "react";
import MyLabel from "./MyLabel";
import Boton from "./Boton";

const Contador = () => {
  const [count, setCount] = useState(0);
  const sumaClick = () => {
    // Ingresa aquí tu código para aumentar el contador
    setCount(count + 1);
  };

  return (
    <div className="alert alert-primary">
      <MyLabel clicks={count} />
      <Boton function={sumaClick} />
    </div>
  );
};

export default Contador;
