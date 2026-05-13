import { useState } from "react"
import "./FormularioState.css"

function FormularioState(){
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")

  return(
    <div>
        <h2>Formulario com State</h2>
        <label htmlFor="nome">Nome</label>
        <br />
        <input  
        type="text" 
        placeholder="Digite seu nome" 
        onChange={(evento) => {

            setNome(evento.target.value)

        }}
        />
        <br />
        <label htmlFor="sobrenome">Sobrenome</label>
        <br />
        <input 
        type="text" 
        placeholder="Digite seu sobrenome"      
        onChange={(evento2) => {

            setSobrenome(evento2.target.value)

        }}
        />
        <br />
        <label htmlFor="">Texto Digitado: <strong>{nome} {sobrenome}</strong></label>
    </div>
  )
}

export default FormularioState