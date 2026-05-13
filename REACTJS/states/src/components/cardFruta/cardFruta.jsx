import { useState } from "react"
import "./cardFruta.css"
    
export default function CardFruta(){
    const [fruta, setFruta] = useState("")
    const [Quantidade, SetQuantidade] = useState(0)
    const [arrFrutas, setArrFrutas] = useState([
    {id: 1, nome:"Melão", Quantidade: 12},
    {id: 2, nome:"Balão", Quantidade: 21}  
    ])



    function cadastrar(e){
        e.preventDefault()
        setArrFrutas([ ...arrFrutas, { id: Date.now(),  nome: fruta, Quantidade: Quantidade}])

    }

    return(
        <section className="sessao-cadastro">

            <h2>Cadastro</h2>

            <form action="" onSubmit={cadastrar}>

            <fieldset className="cadastro">
        
                <label htmlFor="fruta" className="cadastro__rotulo">
                    Digite o nome da fruta
                </label>

                <br />

                <input 
                type="text"
                id="fruta"
                value={fruta}
                placeholder="pq comeu todas as goiabas chico?"
                className="cadastro__entrada"
                onChange={(e) => {
                    setFruta(e.target.value)
                }}
                />

                <br />

                <label htmlFor="frutaQuantidade" className="cadastro__rotulo">
                Digite a quantidade
                </label>

                <br />

                <input 
                type="text"
                id="frutaQuantidade"
                placeholder="Quantidade"
                value={Quantidade}
                className="cadastro__entrada"
                onChange={(e) => {
                    SetQuantidade(e.target.value)
                }}
                />
                 
                </fieldset>

                <button 
                className="cadastro__btncadastrar"
                type="submit"
                >Cadastrar
                </button>
                
                </form>


                <div className="resultados">
                    <ul>
                       {
                        arrFrutas.map((f) => {
                         return (
                         <li key={f.id}>
                            Nome: {f.nome} Quantidade: {f.Quantidade}
                            </li>

                         )
                        })
                       }

                    </ul>
                </div>
        </section>
    )
}