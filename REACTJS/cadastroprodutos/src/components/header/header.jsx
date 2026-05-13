import { Link } from "react-router-dom"
import "./header.css"

export default function Header(){
    return(
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/QuemSomos">Quem Somos</Link>
            <Link to="/Produto">Produtos</Link>
            <Link to="/Frutas">Frutas</Link>
        </nav>
    )
}