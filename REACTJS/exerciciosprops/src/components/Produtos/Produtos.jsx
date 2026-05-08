import Produto from '../exercicio 2/ExercicioTwo'
import './Produtos.css'

function Produtos(){

  const produtos = [
    {
        nome: "Ronaldo",
        preco: 23,
        descricao: "Ronaldo..."
    },
    {
        nome: "Feijo com farinha",
        preco: 3,
        descricao: "Vc fez a prova da interpol"
    },
  ]

  return(
    produtos.map((p) => {
    return(
        <Produto
         Nome = {p.nome}
         Preco = {p.preco}
         Descricao = {p.descricao}
        />
       

    )
    })
  )
}

export default Produtos