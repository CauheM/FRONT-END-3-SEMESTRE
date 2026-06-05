import { useContext, useState } from "react"
import { FrutaContext } from "../../context/FrutaContext"


const Frutas = (e) => {

    const {fruta, setFruta} = useContext(FrutaContext);

    const [novaFruta, SetNovaFruta] = useState([])

    return(
        <>
        <p>

            <input 
               type="text" 
               placeholder="Nova Fruta"
               onChange={(e) => {
                SetNovaFruta(e.target.value)
               }}
            />

            {" "}

            <button onClick={
            () => {
              setFruta(novaFruta)
            }
        }>Bota fruta</button></p>

            <h2>Frutas Cadastradas</h2>
            <p>{fruta}</p>
        </>

        
    )
}

export default Frutas