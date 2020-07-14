import React from 'react';
import exData from "./constantes";

const Ejercicio = (props) => {
    const { children, index } = props;
    const { title, description } = exData[index];

    return (
        <div>
            <a href="/">Volver al inicio</a>
            <h1>{title}</h1>
            <p>{description}</p>
            {children}
        </div>
    );
};

export default Ejercicio;