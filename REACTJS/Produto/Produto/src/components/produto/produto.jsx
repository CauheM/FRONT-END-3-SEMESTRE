import "./produto.css"
import { use, useEffect, useState } from "react"
import img from '../../assets/WRvN2qv_JBk-MQ.jpg'

export default function Produto() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    const [Editar, SetEditar] = useState(false)
    const [arrProdutos, setArrProdutos] = useState([])

   function cadastrarProduto(e) {
        //e.preventDefault()//não deixa o fomulario ser postado

        //validar o formulario
        if(nome.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) || isNaN(quantidade)){
           
            alert("preencha isso direito")  
            return false
        }

        //gerar o objeto q vai pra a api
        const objCadastro = {
        nome,
        descricao,
        preco,
        quantidade,
        imagem: "WRvN2qv_JBk-MQ.jpg"
        }

        //cadastrar a api   
        CadastrarAPI(objCadastro)

        }

         async function CadastrarAPI(obj) {

         //alert("cadastrar")
         //return false

        try {   
        const cadastro = await fetch ("http://localhost:3000/produtos", {
         method : "POST",
         body : JSON.stringify(obj),
         headers : {
         "Content-Type" : "application-json; charset=UTF=8"  
         }
        });

         console.log(cadastro)
         if(cadastro.status == 201){
         const dados = cadastro.json()
         console.log(dados)
         setArrProdutos(...arrProdutos, dados)
         alert("Produto cadastrado")
         limparformulario()
         }
         else{
            alert("deu ruim")
         }
        } 
         catch (error) {
         console.log("Nossos servidores estão pedindo comida, por isso q parou de funcionar");
         console.log(error);
         return false;

         }  
         }

         function limparformulario(){
            setNome("")
            setDescricao("")
            setPreco(0)
            setQuantidade(0)

         }

         async function deletar(id) {
           try {

            const retornoAPI = await fetch(`http://localhost:3000/produtos/${id}`, {method: "delete"})

            if(retornoAPI.status == 200 && retornoAPI.statusText == "OK")
            {

            const NovaLista = arrProdutos.filter((p) => {
            return p.id != id
            })
            
            setArrProdutos(NovaLista)

           }
           else{

           alert("Deu ruim")

            } 
           } 
           catch (e) {
            console.log(e)

           }

         }

         async function EditarProduto(id){
         //e.preventDefault()
         try {
            const cadastroPUT = await fetch (`http://localhost:3000/produtos/${id}`, {
            method : "PUT",
            });
         
            console.log(cadastroPUT)
            if(cadastroPUT.status == 200){
            const dados = cadastroPUT.json()
            console.log(dados)
            setArrProdutos(...arrProdutos, dados)
            alert("Produto atualizado")
            limparformulario()
            }  
            else{
            alert("deu ruim")
         }
         } catch (e) {
            console.log(e);
            
         }
         }

    useEffect(() => {
        //chamar a api
        getProdutos()
    }, [])

        async function getProdutos(){
        try {
            const retornoAPI = await fetch("http://localhost:3000/produtos")
            const dados = await retornoAPI.json()
            console.log(dados);
            //inserir o 
            setArrProdutos(dados)

        } catch (error) {
            console.log("Erro: " + error);
                
        }
        }


    return (
        <>
            <header className="cabecalho">
            <h1 className="titulo--cinza" >SENAI</h1>
            <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={(Editar) ? EditarProduto : cadastrarProduto}>
                {/* <div className="inp ut--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                <input className="input--metade" type="text" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value )} />
                <input className="input--metade" type="number" id="preco" placeholder="Preço" value={preco} onChange={(e) => setPreco(parseFloat(e.target.value))} />
                <input className="input--metade" type="number" id="quantidade" placeholder="Quantidade" value={quantidade} onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                <input className="input--metade" type="text" id="descricao" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value )} />
                </div>
                 
                {Editar && <button type="button" className="btn--cadastro" onClick={() => {
                SetEditar(false)
                limparformulario()
                }}>Cancelar edição</button>}

                {"     "}

                <button type="submit" className="btn--cadastro">Adicionar Produto</button>
                
                
            </form>

        
            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <p>Preço: R$ {prod.preco.toFixed(2)}</p>
                        <p>Descrição: {prod.descricao}</p>
                        <p>Quantidade: {prod.quantidade}</p>
                        <img src={img} alt={prod.nome} />
                        <a href="" onClick={(e)=>{
                            e.preventDefault()
                            deletar(prod.id)
                        }}>Apagar</a>
                        <br />
                        <a href="" onClick={(e)=>{
                            e.preventDefault()
                            SetEditar(true)
                            setNome(prod.nome)
                            setDescricao(prod.descricao)
                            setPreco(prod.preco)
                            setQuantidade(prod.quantidade)
                        }}>Editar</a>
                    </div>
                ))}
            </section>
        </>
    )
}