
import { useState } from 'react'
import './App.css'
import Contador from './components/contador/Contador'
import FormularioState from './components/formulariostate/FormularioState'
import CardFruta from './components/cardFruta/cardFruta'

function App() {
//variavel privada, só pode ser mudada pela função  
const [titulo, setTitulo] = useState("Google")

function mudartexto(){
  setTitulo("Microsoft")
}

function mudartexto2(){
  setTitulo("Ifood")
}

  return(
  //  <>
   // <h1>Minha pagina de {titulo}</h1>
   // <button onClick={mudartexto}>Mudar Texto</button> 
  //  <br />
  //  <button onClick={mudartexto2}>TechTom</button>
  //  <Contador />
 //   <br />
 //  <FormularioState />
   <CardFruta />
 //   </>

  )
}

export default App
