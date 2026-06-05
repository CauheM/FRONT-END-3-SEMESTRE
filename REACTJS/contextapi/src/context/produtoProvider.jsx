import { useState } from "react"
import { ProdutoContext } from "./produtoContext"

const ProdutoProvider = ({ children }) => {

    const [produto, setProduto] = useState("")

    return (
        <ProdutoContext.Provider
            value={{
                produto, setProduto
            }}>
            {children}
        </ProdutoContext.Provider>
    )
}

export default ProdutoProvider