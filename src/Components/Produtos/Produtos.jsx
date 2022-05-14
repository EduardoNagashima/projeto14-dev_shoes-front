import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Filtros from './../Filtros/Filtros'
import Produto from './Produto'

const Produtos = ({ setHeaderVisivel }) => {
    setHeaderVisivel(true);
    const filtros = ["Lançamentos", "Botas", "Casual", "Esporte", "Infantil", "Skatista", "Social"];
    const [filtroEscolhido, setFiltroEscolhido] = useState("Lançamentos");
    const [listarProdutos, setListarProdutos] = useState([]);

    useEffect(() => {
        const requisicaoGet = axios.get("http://localhost:5000/produtos");
        requisicaoGet.then(resposta => {
            const { data } = resposta;
            setListarProdutos(data);
        });
        requisicaoGet.catch(error => {
            console.log(error);
        });
    }, []);

    if (listarProdutos) {
        var filtroProdutos = listarProdutos.filter(item => (item.categoria === filtroEscolhido.toLowerCase()));
    }

    return (
        <Container>
            <FiltroContainer>
                {filtros.map((item, key) =>
                    <Filtros
                        key={key}
                        nomeFiltro={item}
                        filtroEscolhido={filtroEscolhido}
                        setFiltroEscolhido={setFiltroEscolhido}
                    />)}
            </FiltroContainer>
            <ProdutoContainer>
                {filtroProdutos.map((item, key) => <Produto
                    key={key}
                    id={item._id}
                    foto={item.foto}
                    titulo={item.titulo}
                    valor={item.valor}
                />)}
            </ProdutoContainer>
        </Container>
    );
}

const Container = styled.div`
    background-color: #DDDDDD;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 100%;
`;

const FiltroContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    background-color: #f5f5f5;
    overflow-x: scroll;
    margin-bottom: 10px;
`;

const ProdutoContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 60px;
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default Produtos;