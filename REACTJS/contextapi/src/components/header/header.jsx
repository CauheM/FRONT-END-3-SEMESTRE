import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsuarioContext } from "../../context/UsuarioContext";  

const Header = ( ) => {

    const {usuario, setUsuario} = useContext(UsuarioContext)

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem("usuario")
    }

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
                 logout()
            }
        }>Sair</button>
            </nav>
        </header>
    )
}

export default Header