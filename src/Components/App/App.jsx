import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Produtos from "./../Produtos/Produtos"
import UserContext from "./../Contexts/UserContext"
import Login from "../Login";
import Footer from "../Footer";
import Cadastro from "../Cadastro";
import ProdutoSelecionado from "./../ProdutoSelecionado";


const App = () => {

    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuario')));

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ usuario, setUsuario }}>
                <Routes>
                    <Route path="/" element={<Produtos />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                    <Route path="/produtos/:produtoID" element={<ProdutoSelecionado />} />
                </Routes>
                <Footer />
            </UserContext.Provider>
        </BrowserRouter>
    );
}
export default App;