import React, {Fragment, useState} from 'react';

//Operaciones
const useMoneda = (label, stateInicial) => {
    //State Custom Hook
    const [state, actualizarState] = useState(stateInicial);
    //Mostrar en Pantalla
    const Seleccionar = () =>
    (
        <Fragment>
            <label>{label} </label>
            <select>
                <option value="MXN">Peso Mexicano</option>

            </select>
        </Fragment>
    );
    //Retornar State, Interfaz y Func que modifica el State
    return [state, Seleccionar, actualizarState];


}
 
export default useMoneda;