import "./Login.css";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Login = () => { 
    return (
        <>
        <Header/>
        <h1>Login</h1>
        <Link to="/generos">Gêneros</Link>
        <Link to="/filmes">Filmes</Link>
        <Footer/>
        </>

     );
}

export default Login;