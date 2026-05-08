import "./ExercicioSix.css"

function Aluno ({Imagem, Nome, Curso}){
   return(
    <>
    <div className="card-aluno">
    <img className="image" src={Imagem} alt="" />
    <p>
     Nome: {Nome} <br />
     Curso: {Curso}
    </p>
    </div>
    </>
   )
}

export default Aluno