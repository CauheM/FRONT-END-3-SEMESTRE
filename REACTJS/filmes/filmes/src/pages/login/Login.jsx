import "./Login.css";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo.svg"
import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import { Alerta } from "../../components/alerta/Alerta";
import { jwtDecode } from "jwt-decode";
import api from "../../Services/services";

const Login = () => {
    
    const {usuario, setUsuario} = useContext(UsuarioContext)

    const navigate = useNavigate()

    const[email, Setemail] = useState("")//email

    const[senha, Setsenha] = useState("")

    const cadastro = async (E) => {
        E.preventDefault()

        if(email.trim().length == 0 || senha.trim().length == 0){
            Alerta({
                title: "Login",
                text: "preenche isso",
                icon: "warning",
                confirmButtonText: "Tá bom"
            })
            return false
        }

        const dadoslogin = {
            email: email,
            senha: senha
        }
        
        try {

            const retornoAPI = await api.post("/Login", dadoslogin)  

            console.log("API:")
            console.log(retornoAPI.data)

            const token = retornoAPI.data.token
            const usuarioDecoded = jwtDecode(token)
            console.log(usuarioDecoded)

            setUsuario(usuarioDecoded)
            localStorage.setItem("usuario", JSON.stringify(usuarioDecoded))
            Setemail("")
            Setsenha("")
            navigate("/generos")


        } catch (error) {
            Alerta({
                title: "Deu ruim",
                text: "Api ou esse codigo seu tá ruim",
                icon: "error",
                confirmButtonText: "eu te odeio"
            })
        }
        
    } 

    const VerificarLogin = () => {
       const logado = JSON.stringify(localStorage.getItem("usuario"))

       if(logado != undefined || logado != null){
          setUsuario(usuario)
          navigate("/generos")
         }
    }

    useEffect(() => {
    VerificarLogin()
    }, [])

  
    
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
                        <input type="password" value={senha} onChange={(e) => {Setsenha(e.target.value)}} name="senha" placeholder="Digite sua senha"/>
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