import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/WRvN2qv_JBk-MQ.jpg'

export default function Produto() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
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

    useEffect(() => {
        //chamar a api
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
        getProdutos()
    }, [])

    return (
        <>
            <header className="cabecalho">
            <h1 className="titulo--cinza" >SENAI</h1>
            <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={cadastrarProduto}>
                {/* <div className="inp ut--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                <input className="input--metade" type="text" id="nome" placeholder="Nome" onChange={(e) => setNome(e.target.value )} />
                <input className="input--metade" type="number" id="preco" placeholder="Preço" onChange={(e) => setPreco(parseFloat(e.target.value))} />
                <input className="input--metade" type="number" id="quantidade" placeholder="Quantidade" onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                <input className="input--metade" type="text" id="descricao" placeholder="Descrição" onChange={(e) => setDescricao(e.target.value )} />
                </div>

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
                    </div>
                ))}
            </section>
        </>
    )
}