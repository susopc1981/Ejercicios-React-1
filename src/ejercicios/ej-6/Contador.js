import React, { useState } from "react";

const Contador = () => {
  const [count, setCount] = useState(0);
  const sumaClick = () => {
    // Ingresa aquí tu código para aumentar el contador
    setCount(count + 1);
  };

  return (
    <div className="alert alert-primary">
      <p>
        <b>
          Has dado {count}
          {/* Ingresa aquí el número de clicks */} clicks
        </b>
      </p>
      <button className="btn btn-info" onClick={sumaClick}>
        suma 1
      </button>
    </div>
  );
};

export default Contador;
