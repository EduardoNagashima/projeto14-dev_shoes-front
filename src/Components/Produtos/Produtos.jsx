import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Filtros from './../Filtros/Filtros'
import Produto from './Produto'

const Produtos = () => {
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

    if(listarProdutos){
        var filtroProdutos = listarProdutos.filter(item => (item.categoria === filtroEscolhido.toLowerCase()));
    }

    return(
        <Container>
            <Banner>
                <img src="assets/img/logo.png" alt="banner" />
            </Banner>
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
                {filtroProdutos.map((item, key) =>
                    <Produto
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
    width: 100%;
`;
const Banner = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('assets/img/banner.jpg');
    background-size: 100% 100px;
    filter: brightness(80%);
    
    img{
        width: 150px;
    }
`;
const FiltroContainer = styled.div`
    display: flex;
    align-items: center;
    height: 55px;
    background-color: #fff;
    overflow-x: scroll;
    margin-bottom: 10px;
`;

const ProdutoContainer = styled.div`
    flex-wrap: wrap;
    display: flex;
    justify-content: space-evenly;
    a{
        text-decoration: none;
        color: inherit;
    }
`;

export default Produtos;