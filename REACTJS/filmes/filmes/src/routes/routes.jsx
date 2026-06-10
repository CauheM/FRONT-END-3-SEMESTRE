import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Gêneros from "../pages/cadastroGenero/CadastroGenero";
import Filmes from "../pages/cadastroFilme/cadastroFilme";
import PrivateRoute from "./PrivateRoute";

const Rotas = () => {
    return (
        <BrowserRouter>
        {/* aqui iria o header*/}
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/filmes" element={
            <PrivateRoute>
            <Filmes />
            </PrivateRoute>
            } />
            <Route path="/generos" element={
            <PrivateRoute>
            <Gêneros />
            </PrivateRoute>
            } />
        </Routes>
        {/* aqui iria o footer*/}
        </BrowserRouter>
    );
}

export default Rotas;