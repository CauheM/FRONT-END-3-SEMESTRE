import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";  

const Header = ( ) => {

    const {usuario, setUsuario} = useContext(UsuarioContext)

    return(
        <header>
            <nav>
                <Link to={'/'}>Home</Link>{" "}
                <Link to={'/Perfil'}>Perfil</Link>{" "}
                <Link to={'/Mypage'}>My blog</Link>{" "}
                <Link to={'/Produtos'}>Produtos</Link>{" "} 
                <span>( {usuario} )</span>
                 <button onClick={
                  () => {
                 setUsuario(null)
            }
        }>Sair</button>
            </nav>
        </header>
    )
}

export default Header