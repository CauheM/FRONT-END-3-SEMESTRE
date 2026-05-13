import { useState } from "react"
import "./Contador.css"

function Contador() {

   //variaveis e states
   //funções

   const [contador, setContador] = useState(0)

   function ContarIsso( ) {
    setContador(contador + 1)   

    if(contador == 10){

        setContador(contador - 10)
        alert("Número maximo atingido, reiniciando") 

    }

   }
   function StopdeContar(){
    setContador(contador - 1)

    if(contador == 0){

        setContador(contador == 0)
        alert("isso ai n tropa") 

    }
   }

    return (
       <div className="contador">
        <h1 className="contador__title">Contador {contador}</h1>

        <button onClick={ContarIsso}>Contar++</button>
        <br />
        <button onClick={StopdeContar}>Contar--</button>
       </div>

    )
}

export default Contador