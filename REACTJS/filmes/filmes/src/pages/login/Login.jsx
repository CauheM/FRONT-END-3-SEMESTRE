import "./Login.css";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo.svg"
import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const {usuario, setUsuario} = useContext(UsuarioContext)

    const navigate = useNavigate()

    const[email, Setemail] = useState("")//email

    const cadastro = (E) => {
        E.preventDefault()

        setUsuario(email)
        

        localStorage.setItem("usuario", JSON.stringify(email))
        Setemail("")
        navigate("/generos")

    } 
    
    return (    
        <>
        <main className= "main_login">
          <div className="banner"></div>
          <section className="section_login">
            <img src={Logo} alt="Logo do Filmoteca"/>
            <form action="" className="form_login" onSubmit={cadastro}>
                <h1>Login</h1>
                <div className="campos_login">
                    <div className="campo_input">
                        <label htmlFor="email">Email:</label>
                        <input type="email" value={email} onChange={(e) => {Setemail(e.target.value)}} name="email" placeholder="Digite seu e-mail"/>
                    </div>
                    <div className="campo_input">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" name="senha" placeholder="Digite sua senha"/>
                    </div>
                </div>
                <Botao nomeDoBotao="Entrar" />
            </form>
          </section>
        </main>
        </>

     );
}

export default Login;