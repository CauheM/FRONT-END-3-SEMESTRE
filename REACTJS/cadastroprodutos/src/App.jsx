import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CadastroFruta from './pages/cadastrofruta/cadastrofruta'
import CadastroProduto from './pages/cadastroproduto/cadastroproduto'
import HomePage from './pages/home/homepage'
import QuemSomos from './pages/quemsomos/quemsomos'
import Header from './components/header/header'

export default function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route element={<HomePage/>} path='/'/>
    <Route element={<QuemSomos/>} path='/QuemSomos'/>
    <Route element={<CadastroProduto/>} path='/Produto'/>
    <Route element={<CadastroFruta/>} path='/Frutas'/>
    </Routes>
    </BrowserRouter>
      
 
    </>

  )
}

