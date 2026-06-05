import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Home = () => {

    const {usuario} = useContext(UsuarioContext)

    return(
        <>
        <h2>Pagina home</h2>
        <p>Usuário: {usuario}</p>
        </>
    )
}

export default Home
