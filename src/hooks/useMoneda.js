import React, {Fragment, useState} from 'react';

//Operaciones
const useMoneda = (label, stateInicial, opciones) => {
    //State Custom Hook
    const [state, actualizarState] = useState(stateInicial);
    //Mostrar en Pantalla
    const Seleccionar = () =>
    (
        <Fragment>
            <label>{label} </label>
            <select>
                <option value="">--Seleccione Moneda--</option>
                {
                    opciones.map(opcion =>(
                        <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                    ))
                }

            </select>
        </Fragment>
    );
    //Retornar State, Interfaz y Func que modifica el State
    return [state, Seleccionar, actualizarState];


}
 
export default useMoneda;