import "./ExercicioThree.css"

function Perfil({Nome, Idade, Profissao}){
    return (
        <div className="card-perfil">
        <p>
           <strong>Nome:</strong> {Nome} <br />
            <strong>Idade:</strong> {Idade} <br />
            <strong>Profissão:</strong> {Profissao}
        </p>
        </div>
    )
}

export default Perfil