import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import Error from './Error'
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import Axios from 'axios';
import PropTypes from 'prop-types';

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

const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {
    //State del listado de Criptomonedas
    const [listacripto, guardarCriptomonedas] = useState([]);


    //Array Monedas
    const MONEDAS = 
        [
            {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
            {codigo: 'MXN', nombre: 'Peso Mexicano'},
            {codigo: 'EUR', nombre: 'Euro'},
            {codigo: 'GBP', nombre: 'Libra Esternina'},
            {codigo: 'GTQ', nombre: 'Quétzal Guatemalteco'}
        ]

    //Errores
    const [error, guardarError] = useState(false);
    //Usar useMoneda (Hook)
    const [moneda, SelectMoneda] = useMoneda('Elige tu Moneda','', MONEDAS);
    //Usar useCriptomoneda (Hook)
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda','', listacripto);
    
    //Llamado a la API
    useEffect(()=>{
        const consultarAPI = async ()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            //Axios para el fetch
            const resultado = await Axios.get(url);
            //Almacenar CriptoMonedas en el State
            guardarCriptomonedas(resultado.data.Data)
        }
        consultarAPI();
        
    },[]);

    //Submit
    const cotizarMoneda = e =>
    {
        e.preventDefault();
        //Validar si existen datos
        if(moneda === '' || criptomoneda === '')
        {
            guardarError(true);
            return;
        }
        //Datos al Componente Principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }

    return (  
        <form
        onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los campos son obligatorios"/>: null}
        <SelectMoneda/>
        <SelectCripto/>
        <Boton
        type="submit"
        value="Calcular"
        />

        </form>
     );
}
Formulario.propTypes = {
    guardarCriptomoneda: PropTypes.object.isRequired,
    guardarMoneda: PropTypes.object.isRequired
};
export default Formulario;