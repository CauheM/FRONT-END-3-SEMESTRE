import "./CadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../Services/services";

const CadastroGenero = () => { 

    const [valor, setValor] = useState("")
    const [listaGeneros, SetlistaGeneros] = useState([])


    const getGeneros = async () => {
    try {
        const retornoAPI = await api.get("/Genero")

        SetlistaGeneros(retornoAPI.data)
    } catch (error) {
        alert("problema com a api")
        console.log(error)
    }
    }

    useEffect(() => {
    getGeneros()
    }, [])

    const objCadastros = {
        idgenero : crypto.randomUUID(),
        nome : valor
     }

    const cadastrarGenero = async (e) => {
     e.preventDefault()

     if(valor.trim().length == 0){
        alert("preenche isso caramba")
     }


     try {
        const retornoAPI = await api.post("/Genero", objCadastros)
        alert("cadastrado com sucesso")
        LimparFormulario()
        getGeneros()
     } catch (error) {  
        alert("deu ruim aqui")
        console.log(error)
     }
    }
    
    const excluirGenero = async (e) => {

    try {
    const retornoAPI = await api.delete(`/Genero/${e.idgenero}`)
    alert("deletado com sucesso")
    getGeneros()
    } catch (error) {
        alert("deu problema")
        console.log(error)
    }

    }
    

    const editarGenero = () => {
        alert("função em desenvolvimento")
    }

    const LimparFormulario = () => {
        setValor("")
    }


    return (
        <>
            <Header />
            <main>
                <Cadastro
                    //Define o título que será exibido no formulário
                    tituloCadastro="Cadastro de Gênero"
                    // esconde o select de genero
                    visibilidade="none"
                    // Define o texto que aparece dentro do campo de input
                    placeholder="gênero"
                    // ----------------------------------------------------
                    // Propriedades voltada ao cadastro:

                    //Função que será chamada ao enviar o formulário (onSubmit)
                    funcCadastro={cadastrarGenero}
                    //Valor atual do campo de texto
                    valor={valor}
                    //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                    setValor={setValor}

                    
                />
                 <Lista
                    tituloLista="Lista de Gêneros"
                    visibilidade="none"

                    //Chama o método para validar:
                    lista={listaGeneros}
                    //Identifica o tipo de lista:
                    tipoLista="genero"


                    funcExcluir = {excluirGenero}
                    funcEditar = {editarGenero}
                />

            </main>
            <Footer />
        </>
     );
}

export default CadastroGenero;