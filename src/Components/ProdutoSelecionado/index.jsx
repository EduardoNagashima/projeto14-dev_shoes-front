import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import { ProdutoSection, ProdutoMain, DivQuantidade, Button, DivImg, Numeros, Numero, CompraDiv, Descricao } from "./style";
import Header from "../Header";

export default function ProdutoSelecionado() {
    const { produtoID } = useParams();
    const [produto, setProdutos] = useState({});
    const [loading, setLoading] = useState(true);
    const [produtoInfo, setProdutoInfo] = useState({
        quantidade: 0,
        selecionado: null
    });

    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:5000/produtos/${produtoID}`)
            .then(res => {
                const { data } = res;
                setProdutos(data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
            })
    }, []);

    function comprar() {
        const { quantidade, selecionado } = produtoInfo;
        if (!quantidade || quantidade <= 0) {
            alert("Selecione uma quantidade válida")
            return;
        }
        if (!selecionado) {
            alert("Selecione uma numeração!")
            return;
        }

        const carrinho = [{
            produtoID: produto._id,
            titulo: produto.titulo,
            tamanho: selecionado,
            valor: produto.valor,
            foto: produto.foto,
            quantidade
        }]

        const temCarrinho = JSON.parse(localStorage.getItem('carrinho'));
        console.log(temCarrinho)
        if (temCarrinho) {
            const novocarrinho = [...temCarrinho, carrinho]
            localStorage.setItem("carrinho", JSON.stringify(novocarrinho));
            navigate("/carrinho");
        } else {
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            console.log()
            navigate("/carrinho");
        }


    }

    return (
        <>
            <Header />
            <ProdutoSection>
                <ProdutoMain>
                    <DivImg>
                        <img src={produto.foto} alt="" />
                        <h1>{produto.titulo}</h1>
                    </DivImg>
                    <h3>Numerações:</h3>
                    <Numeros>
                        {!loading && produto.numeracao.map((numero) => {
                            return (
                                <Numero selecionado={produtoInfo.selecionado === numero} onClick={() => setProdutoInfo({ ...produtoInfo, selecionado: numero })}>{numero}</Numero>
                            );
                        })}
                    </Numeros>
                    <Descricao>
                        <h2>Descrição:</h2>
                        <span>{produto.descricao}</span>
                    </Descricao>
                    <CompraDiv>
                        <DivQuantidade>
                            <ion-icon onClick={() => setProdutoInfo({ ...produtoInfo, quantidade: (produtoInfo.quantidade + 1) })} name="chevron-up-outline"></ion-icon>
                            {produtoInfo.quantidade}
                            {!produtoInfo.quantidade <= 0 && <ion-icon onClick={() => setProdutoInfo({ ...produtoInfo, quantidade: (produtoInfo.quantidade - 1) })} name="chevron-down-outline"></ion-icon>}
                        </DivQuantidade>
                        <Button disabled={produtoInfo.quantidade <= 0} onClick={comprar}>Comprar</Button>
                    </CompraDiv>
                </ProdutoMain>
            </ProdutoSection>
        </>
    );
}