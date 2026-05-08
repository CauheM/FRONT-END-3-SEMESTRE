import "./ExercicioFive.css"

function Filme({Titulo, Ano, Genero, Nota}){
    return(
      <h2>
        Título: {Titulo} <br />
        Ano: {Ano} <br />
        Genêro: {Genero} <br /> 
        Nota: {Nota} 
      </h2>
    )
}

export default Filme