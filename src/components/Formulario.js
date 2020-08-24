import React from 'react';
import styled from '@emotion/styled'
import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'

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
    const MONEDAS = 
        [
            {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
            {codigo: 'MXN', nombre: 'Peso Mexicano'},
            {codigo: 'EUR', nombre: 'Euro'},
            {codigo: 'GBP', nombre: 'Libra Esternina'},
            {codigo: 'GTQ', nombre: 'Quétzal Guatemalteco'}
        ]

    //Usar useMoneda (Hook)
    const [moneda, SelectMoneda] = useMoneda('Elige tu Moneda','', MONEDAS);
    //Usar useCriptomoneda (Hook)
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda','')
    return ( 
        <form>
        <SelectMoneda/>
        <SelectCripto/>
        <Boton
        type="submit"
        value="Calcular"
        />

        </form>
     );
}
 
export default Formulario;