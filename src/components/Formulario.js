import React from 'react';
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'

const Boton = styled.input
`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color .3s ease;

    // Efecto cambio de color en el botón
    &:hover
    {
        background-color: #326AC0;
        cursor: pointer;
    }
`

const Formulario = () => {
    //Usar State Custom
    const [moneda, SelectMoneda, actualizarState] = useMoneda('Elige tu Moneda','');
    return ( 
        <form>
        <SelectMoneda/>
        <Boton
        type="submit"
        value="Calcular"
        />

        </form>
     );
}
 
export default Formulario;