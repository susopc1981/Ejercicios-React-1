import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Ejercicio1 , Ejercicio2, Ejercicio3} from "./ejercicios/";
import Ejercicio from "./ejercicios/Ejercicio"

const Routes = () => {

    const exercises = [
        Ejercicio1,
        Ejercicio2,
        Ejercicio3,
    ]

    return (
        <Switch>
            {
                exercises.map((Component, i) =>
                    <Route key={"route-dynamic-" + i} path={"/ej-" + (i + 1)}>
                        <Ejercicio index={i}>
                            <Component />
                        </Ejercicio>
                    </Route>
                )
            }
        </Switch >
    );
};

export default Routes;