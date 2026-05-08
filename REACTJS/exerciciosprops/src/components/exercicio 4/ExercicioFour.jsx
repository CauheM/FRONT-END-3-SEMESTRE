import "./ExercicioFour.css"

function Botao({texto}){
   return(
    <>
    <nav className="nave">
    <p>{texto}</p>
    <button className="butao">
    clique em mim
    </button>
    </nav>


    </>
   )
}



export default Botao