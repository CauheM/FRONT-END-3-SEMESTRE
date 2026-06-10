import { Children, useEffect, useState } from "react";
import { UsuarioContext } from "./UsuarioContext";


const UsuarioProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)                                                                                                                                                                                                                                                                                                                                                                                                 

    useEffect(() => {
        const UsuarioStorage = JSON.parse(localStorage.getItem("usuario")) || ""
        setUsuario(UsuarioStorage)
    }, [])

    return(
        <UsuarioContext.Provider
        value={{usuario, setUsuario}}
        >
        {children}
        </UsuarioContext.Provider>
    )
}

export default UsuarioProvider