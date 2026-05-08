import { useState } from 'react'
import './App.css'
import Imagem from './assets/37_Sem_Título_20260429164130-removebg-preview.png'

import Title from './components/Title/Title'
import SubTitle from './components/SubTitle/Subtitle'
import Saudacao from './components/exercicio 1/ExercicioOne'
import Produto from './components/exercicio 2/ExercicioTwo'
import Perfil from './components/exercicio 3/ExercicioThree'
import Botao from './components/exercicio 4/ExercicioFour'
import Filme from './components/exercicio 5/ExercicioFive'
import Aluno from './components/exercicio 6/ExercicioSix'
import MyChildren from './components/mychildren/mychildren'
import Conteudo from './components/exercicio 7/ExercicioSeven'
import Contato from './components/exercicio 8/ExercicioEight'
import Jogo from './components/exercicio 9/ExercicioNine'
import Produtos from './components/Produtos/Produtos'
import Contatos from './components/exercicio 8/PontodeCon8'

function App() {

  return (
    <>
      <Title 
      nome="Cauhê" 
      sobrenome="Matheus"/>
      <SubTitle 
      texto="Bem vindo" 
      idade={17}/>
    
<hr />

    <Saudacao nome="Cauhê"/>

<hr />

    <Produto Nome="cadeira" Preco={120} Descricao="cadeira de plastico bem confortavel (confia)"/>
    <Produto Nome="machado" Preco={150} Descricao="fogo fogo fogo"/>
    <Produto Nome="escova" Preco={30} Descricao="usado pra escovar os dentes, certo?"/>

    <Produtos/>

<hr />
    
    <Perfil Nome="Cauhê" Idade={17} Profissao="Boa pergunta"/>

<hr />

    <Botao texto="Eu n sei o q vou falar, mas não irei falar, pq n pode falar, algo q vc n pode imaginar"/>

<hr />

    <Filme Titulo="Amanha e um novo dia" Ano={2000} Genero="Drama" Nota={78}/>
    <Filme Titulo="Meu cunhado favorito" Ano={1998} Genero="Comédia" Nota={81}/>
    <Filme Titulo="Semana que vem eu te conto" Ano={2015} Genero="Ação" Nota={67}/>

<hr />

    <Aluno Imagem={Imagem} Nome="Brandão" Curso="Cursando"/>

<hr />

<MyChildren>
    <Conteudo Nome="Cauhê" texto="eu ali"/>
    <Conteudo Nome="Cauhê" texto="eu ali"/>
    <Conteudo Nome="Cauhê" texto="eu ali"/>
</MyChildren>

<hr />

    <Contatos/>

<hr />
    <MyChildren>
    <Jogo Nome="Capital do Trap" Imagem={Imagem} Preco={200} Plataforma="Tlaystitoun"/>
    <Jogo Nome="Capital do Trap" Imagem={Imagem} Preco={200} Plataforma="Tlaystitoun"/>
    <Jogo Nome="Capital do Trap" Imagem={Imagem} Preco={200} Plataforma="Tlaystitoun"/> 
    </MyChildren>
    </>
  )
}

export default App  