import './CardPerfil.css'
import imagem from '../../src/assets/download (11).jpeg'

function CardPerfil(){
   return (
    <div className="card-perfil">
    <img 
    className="card-perfil__image" 
    src={imagem} 
    alt="imagem do usuario"/>
    </div>
   )
}

export default CardPerfil