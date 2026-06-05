import "./CadastroFilme.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import { Alerta } from "../../components/alerta/Alerta";
import { useState, useEffect } from "react";
import api from "../../Services/services";
import Lista from "../../components/lista/Lista";
import imagem from "../../assets/img/juao.jpeg"
import { use } from "react";

const CadastroFilmes = (e) => { 
    //States e Variaveis
    const [valor, setValor] = useState("")
    const [valorGenero, setValorGenero] = useState("");
    const [editar, setEditar] = useState(false)
    const [listaFilmes, SetlistaFilmes] = useState([])
    const [listaGeneros, SetlistaGeneros] = useState([])
    const [id, setId] = useState(0)

    //GET
    const getGeneros = async () => {
        try 
        {
            const retornoAPI = await api.get("/Genero")

            SetlistaGeneros(retornoAPI.data)
        } 
        catch (error) 
        {
            Alerta({
            title: "Cadastro de Filmes",
            text: "API tá ruim",
            icon: "error",
            confirmButtonText: "OK"
        })     
        }
    }

    const getFilmes = async () => {
        try 
        {
            const retornoAPI = await api.get("/Filme")

            SetlistaFilmes(retornoAPI.data)
        } 
        catch (error) 
        {
            Alerta({
            title: "Cadastro de Filmes",
            text: "API FIlme tá ruim",
            icon: "error",
            confirmButtonText: "OK"
        })     
        }      
    }

    useEffect(() => {
    getGeneros()
    getFilmes()
    }, [])

    //PUT

    const preEditar = (i) =>{
     setEditar(true)
     setValor(i.titulo)
     setId(i.idfilme)     

      const idGen =
      i.idgenero ??
      i.genero?.idgenero ??
      i.idgeneroNavigation?.idgenero;
    setIdGenero(idGen || "");
    }

    const editarFilme = async (i) => {  
    i.preventDefault();

    if (valor.trim().length === 0 || !valorGenero) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, preencha todos os campos!",
        icon: "warning",
      });
      return;
    }
 
    const formData = new FormData();       
    formData.append("titulo", valor);
    formData.append("idgenero", valorGenero);


    try {
      await api.put(`/Filme/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Alerta({
        title: "Sucesso!",
        text: "Filme atualizado com sucesso!",
        icon: "success",
      });

      LimparFormulario()
      await getFilmes()
    } catch (error) {
      console.log(error);
      Alerta({
        title: "Erro!",
        text: "Erro ao atualizar o filme. Tente novamente!",
        icon: "error",
      });
    }

    }

    //POST

    const cadastrarFilme = async (e) => {
    e.preventDefault() 
    
      if (valor.trim().length === 0) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, preencha o nome do filme!",
        icon: "warning",
      });
      return;
    }

    if (!valorGenero) {
      Alerta({
        title: "Atenção!",
        text: "Por favor, selecione um gênero!",
        icon: "warning",
      });
      return;
    }

    const formData = new FormData();
    formData.append("idfilme", crypto.randomUUID());        
    formData.append("titulo", valor);

    formData.append("idgenero", valorGenero);

     try 
     {
        await api.post("/Filme", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Alerta({
        title: "Sucesso!",
        text: "Filme cadastrado com sucesso!",
        icon: "success",
      });
      
     LimparFormulario()
     getFilmes()
     } 
     catch (error) 
     {
                Alerta({
                title: "Cadastro de gênero",
                text: `Deu ruim`,
                icon: "error",
                confirmButtonText: "TOP"
            })
     }
    }

    //DELETE
    const excluirFilme = async (filme) => {
      const resultado = await Alerta({
      title: "Tem certeza?",
      text: `Deseja excluir o filme?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar",
      });
      
      if (resultado.isConfirmed) {
      try {
        await api.delete(`/Filme/${filme.idfilme}`);

        Alerta({
          title: "Sucesso!",
          text: "Filme excluído com sucesso!",
          icon: "success",
        });

        await getFilmes();
      } catch (error) {
        console.log(error);
        Alerta({
          title: "Erro!",
          text: "Erro ao excluir o filme. Tente novamente!",
          icon: "error",
        });
      }
    }
    }

    //LIMPAR
    const LimparFormulario = () => {
    setValor("");
    setValorGenero("");
    setEditar(false);
    SetlistaFilmes("");
    }
    //Funções

    //Ciclo de vida

    return (
        <>
        <Header />
        <main>
            <Cadastro 
             //Define o título que será exibido no formulário
            tituloCadastro="Cadastro de Filme"
            // esconde o select de genero
            //visibilidade="none"
            // Define o texto que aparece dentro do campo de input
            placeholder="filme"
            // ----------------------------------------------------
            // Propriedades voltada ao cadastro:

            //Função que será chamada ao enviar o formulário (onSubmit)
            funcCadastro={editar ? editarFilme : cadastrarFilme}
             //Valor atual do campo de texto
            valor={valor}
            //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
            setValor={setValor}

            valorGenero={valorGenero}

            setValorGenero={setValorGenero}

            btnEditar={editar}
            cancelarEdicao={LimparFormulario}
            listaGeneros={listaGeneros}
                        
            />

            <Lista  
            tituloLista="Lista de Filmes"
            //visibilidade="none"

            //Chama o método para validar:
            lista={listaFilmes}
            listaGeneros={listaGeneros}
            //Identifica o tipo de lista:
            tipoLista="filme"


            funcExcluir = {excluirFilme}
            funcEditar = {preEditar}
            />


        </main>
        <Footer />
        </>
     );
}

export default CadastroFilmes;