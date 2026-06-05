import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"

const Perfil = () => {
    //state global
    const {usuario, setUsuario} = useContext(UsuarioContext)
    //state local 
    const [novoUsuario, setNovoUsuario] = useState("")

    return(
        <div>
        <h2>Meu Perfil</h2>
        <span>Usuario cadastrado: {usuario}</span>
        <p>

            <input 
               type="text" 
               placeholder="Novo usuário"
               value={novoUsuario}
               onChange={(e) => {
                setNovoUsuario(e.target.value)
               }}
            />

            {" "}

            <button onClick={
            () => {
              setUsuario(novoUsuario)
            }
        }>Entrar</button></p>
        </div>

    )
}

export default Perfil