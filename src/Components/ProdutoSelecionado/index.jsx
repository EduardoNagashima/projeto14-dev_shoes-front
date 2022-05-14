import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ProdutoSection, ProdutoMain, DivImg, Numeros, Numero, CompraDiv, Descricao } from "./style";
import Header from "../Header";

export default function ProdutoSelecionado() {
    const { produtoID } = useParams();
    const [produto, setProdutos] = useState({});
    const [loading, setLoading] = useState(true);
    const [selecionado, setSelecionado] = useState();

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

    return (
        <>
            <Header />
            <ProdutoSection>
                <ProdutoMain>
                    <DivImg>
                        <img src={produto.foto} alt="" />
                        <h1>{produto.titulo}</h1>
                    </DivImg>
                    <Numeros>
                        {!loading && produto.numeracao.map((numero) => {
                            return (
                                <Numero selecionado={selecionado === numero} onClick={() => setSelecionado(numero)}>{numero}</Numero>
                            );
                        })}
                    </Numeros>
                    <Descricao>
                        <h2>Descrição:</h2>
                        <span>{produto.descricao}</span>
                    </Descricao>
                    <CompraDiv>
                        <button>Comprar</button>
                    </CompraDiv>
                </ProdutoMain>
            </ProdutoSection>
        </>
    );
}