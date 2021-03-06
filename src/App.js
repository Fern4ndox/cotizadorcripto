import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import imagen from './cryptomonedas.png'
import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner'
import Axios from 'axios';


//Styled
const Contenedor = styled.div
`
max-width: 900px;
margin: 0 auto;
@media (min-width:992px)
{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
}
`
const Imagen = styled.img
`
max-width: 100%;
margin-top: 5rem;
`
const Heading = styled.h1
`
font-family: 'Bebas Neue', cursive;
color: #fff;
text-align: left;
font-weight: 700;
font-size: 50px;
margin-bottom: 50px;
margin-top: 80px;

&::after{
  content:'';
  width: 100px;
  height: 6px;
  background-color: #66A2FE;
  display: block;
}
`

function App() {

  //State Moneda
  const [moneda, guardarMoneda] = useState('');
  const [criptomoneda, guardarCriptomoneda] = useState('');
  const [resultado, guardarResultado] = useState({});
  const [cargando, guardarCargando] = useState (false);
  //Cálculo Moneda a Cripto
  useEffect(()=>{
    const cotizarCriptomoneda = async () => 
    {
      //Evitar Ejecución
    if(moneda=== '' && criptomoneda === '') return;
    //Consultar API para Cotizar
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
    const resultado = await Axios.get(url);
    //MostrarSpinner
    guardarCargando(true);
    //OcultarSpinner 
    setTimeout(()=>
    { //Cambiar a Cargando
      guardarCargando(false);
      //Guardar Coti
      //[criptomoneda][moneda] => Accede dinámicamente a la respuesta de la API
      guardarResultado(resultado.data.DISPLAY[criptomoneda][moneda]);
    },3000);
    
    }
    cotizarCriptomoneda();
  },[moneda, criptomoneda])
    //Mostrar Spinner o  Resultado
    const componente = (cargando) ? <Spinner/> : <Cotizacion resultado={resultado}/>

  return (
    <Contenedor>
      <div>
        <Imagen
        src={imagen}
        alt="imagen cripto"
        />
      </div>
      <div>
      <Heading>
        Cotiza Criptomonedas al Instante
      </Heading>
      <Formulario
      guardarMoneda={guardarMoneda}
      guardarCriptomoneda={guardarCriptomoneda}
      />
      {componente}
      </div>
    </Contenedor>
   
  );
}

export default App;
