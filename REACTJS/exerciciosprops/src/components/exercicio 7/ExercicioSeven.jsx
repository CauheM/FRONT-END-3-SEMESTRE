import "./ExercicioSeven.css";
function Conteudo({Nome, texto}){
    return(
        <nav className="coisos">
            <p>
               <strong>Nome:</strong> {Nome} <br />
                <strong>Descrição:</strong> {texto}
            </p>
        </nav>
    )
}

export default Conteudo