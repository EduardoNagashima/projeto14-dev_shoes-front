import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ProdutoSection, ProdutoMain, DivQuantidade, Button, DivImg, Numeros, Numero, CompraDiv, Descricao } from "./style";
import Header from "../Header";

export default function ProdutoSelecionado() {
    const { produtoID } = useParams();
    const [produto, setProdutos] = useState({});
    const [loading, setLoading] = useState(true);
    const [quantidade, setQuantidade] = useState(0);
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

    function comprar() {
        if (!quantidade || quantidade <= 0) {
            alert("Selecione uma quantidade válida")
            return;
        }
        if (!selecionado) {
            alert("Selecione uma numeração!")
            return;
        }

        console.log(quantidade, selecionado, produto.valor)


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
                                <Numero selecionado={selecionado === numero} onClick={() => setSelecionado(numero)}>{numero}</Numero>
                            );
                        })}
                    </Numeros>
                    <Descricao>
                        <h2>Descrição:</h2>
                        <span>{produto.descricao}</span>
                    </Descricao>
                    <CompraDiv>
                        <DivQuantidade>
                            <ion-icon onClick={() => setQuantidade(quantidade + 1)} name="chevron-up-outline"></ion-icon>
                            {quantidade}
                            {!quantidade <= 0 && <ion-icon onClick={() => setQuantidade(quantidade - 1)} name="chevron-down-outline"></ion-icon>}
                        </DivQuantidade>
                        <Button disabled={quantidade <= 0} onClick={comprar}>Comprar</Button>
                    </CompraDiv>
                </ProdutoMain>
            </ProdutoSection>
        </>
    );
}