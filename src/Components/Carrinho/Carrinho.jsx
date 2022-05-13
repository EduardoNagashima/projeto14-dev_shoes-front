import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ItensCarrinho from "./ItensCarrinho"
const Carrinho = () => {
    const teste = [{
		"_id": "627b1b9d60829b3b313553e8",
		"titulo": "Tênis Esporte Masculino Header Vermelho",
		"foto": "https://static.netshoes.com.br/produtos/tenis-esporte-masculino-header-vermelho/16/0KT-0035-016/0KT-0035-016_zoom1.jpg?ts=1621274599&ims=544x",
		"descricao": "Tênis Esporte Masculino, confeccionado em material alternativo com costuras reforçadas para maior durabilidade do produto, fechamento em cadarço para melhor ajuste aos pés, solado em borracha antiderrapante proporcionando leveza, conforto e segurança ao caminhar.Estilo e conforto para o dia a dia . Aposte!",
		"numeracao": [
			"38",
			"39",
			"40",
			"41",
			"42"
		],
		"categoria": "esporte",
		"valor": "62.90",
		"quantidade": 2,
        "tamanho" : "38"
	},
{
		"_id": "627b1c8e60829b3b313553e9",
		"titulo": "Tênis Adidas Breaknet Masculino - Branco+Preto",
		"foto": "https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-masculino/28/NQQ-4378-028/NQQ-4378-028_zoom1.jpg?ts=1649619411&ims=544x",
		"descricao": "O Tênis Adidas Masculino é o calçado ideal para te acompanhar em todos os momentos. Com design clássico, traz as listras icônicas da marca em um modelo clean que oferece versatilidade ao combinar com diferentes peças. Monte looks autênticos e descolados usando o Tênis Adidas Breaknet. Não deixe de garantir o seu!",
		"numeracao": [
			"38",
			"39",
			"40",
			"41",
			"42"
		],
		"categoria": "casual",
		"valor": "206.99",
		"quantidade" : 2,
        "tamanho" : "42"
	}]
    const token = null;
    const navigate = useNavigate();
    let totalCarrinho = 0;
    teste.forEach(item=> totalCarrinho = totalCarrinho + (item.valor * item.quantidade));
    totalCarrinho = totalCarrinho.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    
    function finalizarPedido(){
        if(!token){
            navigate('/login');
            return;
        }
    }
    function voltarHome(){
        navigate('/');
    }
    return(
        <Container>
            <Header>
                <ion-icon onClick={() => voltarHome()} name="chevron-back-outline"></ion-icon>
                <h1>Carrinho</h1>
            </Header>
            <ProdutoContainer>
                {teste.map((item, key) => <ItensCarrinho
                    key={key}
                    id={item._id}
                    foto={item.foto}
                    titulo={item.titulo}
                    valor={item.valor}
                    quantidade={item.quantidade}
                    tamanho={item.tamanho}
                />)}
            </ProdutoContainer>
            <hr className="hr"/>
            <TotalCarrinho>Total Carrinho: {totalCarrinho}</TotalCarrinho>
            <hr className="hr"/>
            <Botao onClick={() => finalizarPedido()}>
                Finalizar Pedido
            </Botao>
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
    min-height: 100vh;

    .hr{
        width: 100%;
        height: 4px;
        background-color: #fff;
    }
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    margin-bottom: 12px;
    background-color: #fff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
    position: relative;

    ion-icon{
        position: absolute;
        font-size: 28px;
        left: 15px;
    }

    h1{
        font-family: 'Anton', sans-serif;
        font-size: 24px;
        letter-spacing: 0.5px;
    }
`;
const ProdutoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Botao = styled.button`
    color: #fff;
    font-size: 18px;
    border-radius: 20px;
    width: 50%;
    height: 50px;
    margin-top: 10px;
    background-color: #fa6f0c;
    border: solid 1px #fff;
`;
const TotalCarrinho = styled.div`
    margin-top: 4px;
    margin-bottom: 4px;
    font-weight: 500;
`;
export default Carrinho;