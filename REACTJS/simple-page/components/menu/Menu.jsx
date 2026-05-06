import'./Menu.css'
import imagem from '../../src/assets/download (11).jpeg'

function Menu() {

  return (
    <nav className="menu">
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem Somos</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item menu__item--signin">Entrar</a>
            <a href="#" className="menu__item menu__item--signup">Cadastrar</a>
            <div className="card-perfil">
           <img className="card-perfil__image" src={imagem} alt="imagem do usuario"/>
            </div>
        </nav>
  )
}

export default Menu;