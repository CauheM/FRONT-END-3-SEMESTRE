import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import Perfil from './components/perfil/Perfil'
import Mypage from './components/mypage/Mypage'
import Header from './components/header/header'
import Fruta from './components/frutas/frutas'
import Produtos from './components/produto/Produto'
import PrivateRoute from './routes/PrivateRoutes'

function App() {


  return (
    <BrowserRouter> 
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Perfil' element={<Perfil/>}/>
      <Route path='/Mypage' element={
        <PrivateRoute>
        < Mypage/>
        </PrivateRoute>
        }/>

      <Route path='/Produtos' element={
        <PrivateRoute>
          <Produtos/>
        </PrivateRoute>
      }/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
