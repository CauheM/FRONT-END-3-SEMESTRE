import { Children, useState } from "react"
import { FrutaContext } from "./FrutaContext"

const FrutaProvider = ({children}) => {
     const[fruta, setFruta] = useState("Manga") 
    return(
        <FrutaContext.Provider
        value={{fruta, setFruta}}
        >
        {children}
        </FrutaContext.Provider>
    )
}

export default FrutaProvider