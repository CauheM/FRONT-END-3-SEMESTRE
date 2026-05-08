import "./ExercicioTwo.css"

function Produto({Nome, Preco, Descricao}){
    return(
        <h2>
            Nome do Produto: {Nome} <br />
            Preço: {Preco} <br />
            Descrição: {Descricao}
        </h2>
    )
}

export default Produto