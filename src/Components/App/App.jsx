import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Produtos from "./../Produtos/Produtos"
import UserContext from "../../Contexts/UserContext"
import Login from "../Login";
import Footer from "../Footer";
import Cadastro from "../Cadastro";
import ProdutoSelecionado from "./../ProdutoSelecionado";
import Header from "../Header";
import Perfil from "../Perfil";
import Carrinho from "../Carrinho/Carrinho";
import Favoritos from "../Favoritos/Favoritos"


const App = () => {

    const [usuario, setUsuario] = useState(JSON.parse(localStorage.getItem('usuario')));
    const [headerVisivel, setHeaderVisivel] = useState(true);

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ usuario, setUsuario }}>
                <Header visivel={headerVisivel} />
                <Routes>
                    <Route path="/" element={<Produtos setHeaderVisivel={(visivel) => { setHeaderVisivel(visivel) }} />} />
                    <Route path="/login" element={<Login setHeaderVisivel={(visivel) => { setHeaderVisivel(visivel) }} />} />
                    <Route path="/perfil" element={<Perfil setHeaderVisivel={(visivel) => { setHeaderVisivel(visivel) }} />} />
                    <Route path="/carrinho" element={<Carrinho setHeaderVisivel={(visivel) => { setHeaderVisivel(visivel) }} />} />
                    <Route path="/cadastro" element={<Cadastro setHeaderVisivel={(visivel) => { setHeaderVisivel(visivel) }} />} />
                    <Route path="/favoritos" element={<Favoritos setHeaderVisivel={(visivel) => { setHeaderVisivel(visivel) }} />} />
                    <Route path="/produtos/:produtoID" element={<ProdutoSelecionado setHeaderVisivel={(visivel) => { setHeaderVisivel(visivel) }} />} />
                </Routes>
                <Footer />
            </UserContext.Provider>
        </BrowserRouter>
    );
}
export default App;