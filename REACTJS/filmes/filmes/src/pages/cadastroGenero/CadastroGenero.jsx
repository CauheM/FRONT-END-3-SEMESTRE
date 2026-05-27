    import "./CadastroGenero.css";
    import Header from "../../components/header/Header";
    import Footer from "../../components/footer/Footer";
    import Cadastro from "../../components/cadastro/Cadastro";
    import Lista from "../../components/lista/Lista";
    import { useEffect, useState } from "react";
    import api from "../../Services/services";
    import Swal from "sweetalert2";
import { Alerta } from "../../components/alerta/Alerta";

    const CadastroGenero = () => { 

        const [valor, setValor] = useState("")
        const [listaGeneros, SetlistaGeneros] = useState([])
        const [editar, setEditar] = useState(false)
        const [id, setId] = useState(0)


        const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero")

            SetlistaGeneros(retornoAPI.data)
        } catch (error) {
            Swal.fire({
           title: 'Cadastro de Genero!',
           text: 'Liga a API',
           icon: 'warning',
           confirmButtonText: 'Tá, eu vou ligar'
           })
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
           // alert("preenche isso caramba")
           Swal.fire({
           title: 'Cadastro de Genero!',
           text: 'Preenche isso',
           icon: 'error',
           confirmButtonText: 'Tá bom'
           })
            return false
        }


        try {
            const retornoAPI = await api.post("/Genero", objCadastros)
            Alerta({
                title: "Cadastro de gênero",
                text: `${valor} cadastrado com sucesso`,
                icon: "success",
                confirmButtonText: "TOP"
            })
            LimparFormulario()
            getGeneros()
        } catch (error) {  
           Swal.fire({
           title: 'Cadastro de Genero!',
           text: 'Deu ruim',
           icon: 'error',
           confirmButtonText: 'Tá bom'
           })
            console.log(error)
        }
        }
        
        const excluirGenero = async (e) => {

       const result = await Swal.fire({
       title: "Você tem certeza?",
       text: `Quer apagar o gênero ${e.nome}`,
       icon: "warning",
       showCancelButton: true,
       confirmButtonColor: "#3085d6",
       cancelButtonColor: "#d33",
       confirmButtonText: "Sim",
       cancelButtonText: "Não"
       });
       
       if(!result.isConfirmed){
       return false
       }
        
        

        try {
        const retornoAPI = await api.delete(`/Genero/${e.idgenero}`)
            Swal.fire({
           title: 'Cadastro de Genero!',
           text: 'Deletado com sucesso',
           icon: 'success',
           confirmButtonText: ':)'
           })
        getGeneros()
        } catch (error) {
            Swal.fire({
           title: 'Cadastro de Genero!',
           text: 'Deu ruim',
           icon: 'error',
           confirmButtonText: 'Tá bom'
           })
            console.log(error)
        }

        }
        
        //mostra os dados no formulario para o usuário editar
        const preEditar = (i) => {
            setEditar(true)
            setValor(i.nome)
            setId(i.idgenero)
        }

        const editarGenero = async (e) => {
            e.preventDefault();

            if(valor.trim().length == 0){
            Swal.fire({
           title: 'Cadastro de Genero!',
           text: 'Preenche isso',
           icon: 'error',
           confirmButtonText: 'Tá bom'
           })
            return false
            }
            const objCadastro = {
                idgenero : id,
                nome : valor
            }


        try {
            const retornoAPI = await api.put(`/Genero/${id}`, objCadastro)
            Swal.fire({
           title: 'Cadastro de Genero!',
           text: 'Deletado com sucesso',
           icon: 'success',
           confirmButtonText: ':)'
           })
            LimparFormulario()
            getGeneros()
        } catch (error) {  
            Swal.fire({
           title: 'Cadastro de Genero!',
           text: 'Deu ruim',
           icon: 'error',
           confirmButtonText: 'Tá bom'
           })
            console.log(error)
        }
        }

        const LimparFormulario = () => {
            setEditar(false)
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
                        funcCadastro={editar ? editarGenero : cadastrarGenero}
                        //Valor atual do campo de texto
                        valor={valor}
                        //Função que atualiza o estado do valor no componente pai sempre que o usuário digita no campo
                        setValor={setValor}
                        btnEditar={editar}
                        cancelarEdicao={LimparFormulario}

                        
                    />
                    <Lista
                        tituloLista="Lista de Gêneros"
                        visibilidade="none"

                        //Chama o método para validar:
                        lista={listaGeneros}
                        //Identifica o tipo de lista:
                        tipoLista="genero"


                        funcExcluir = {excluirGenero}
                        funcEditar = {preEditar}
                    />

                </main>
                <Footer />
            </>
        );
    }

    export default CadastroGenero;