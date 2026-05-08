import './ExercicioEight.css'

function Contato ( {Nome, Telefone, Email} ){
    return(
  <nav className='coisosok'>
    <p>
        <strong>Nome:</strong> {Nome} <br />
        <strong>Telefone:</strong> {Telefone} <br />
        <strong>Email</strong> {Email}
    </p>
  </nav>
  )
}

export default Contato