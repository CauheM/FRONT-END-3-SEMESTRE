import './ExercicioNine.css'

function Jogo({Nome, Plataforma, Preco, Imagem}){
    return(
       <nav className='JogoCard'>
       <img src={Imagem} alt="" className='imagem' />
        <p>
            {Nome} <br />
            {Preco} <br />
            {Plataforma} 
        </p>
    </nav>
    )

}

export default Jogo