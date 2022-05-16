import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import ItensCarrinho from "./ItensCarrinho"
import axios from 'axios';
import { useContext } from 'react';
import UserContext from "../../Contexts/UserContext";

const Carrinho = ({ setHeaderVisivel }) => {
    setHeaderVisivel(false);
    const { usuario } = useContext(UserContext);
    const carrinho = JSON.parse(localStorage.getItem('carrinho'));
    const navigate = useNavigate();
   
    function voltarHome() {
        navigate('/');
    }

    function finalizarPedido() {
        if (!usuario) {
            navigate('/login');
            return;
        }
        const config = { headers: { Authorization: `Bearer ${usuario.token}`}};
        const requisicaoPost = axios.post("https://dev-shoes-back.herokuapp.com/checkout",{
            compra: carrinho
        },config);
        requisicaoPost.then(resposta =>{
            localStorage.removeItem('carrinho');
            alert("Compra realizada!");
            navigate('/perfil');
        });requisicaoPost.catch(error =>{
            console.log(error);
        })
    }
    if (carrinho !== null) {
        let totalCarrinho = 0;
        carrinho.forEach(item => totalCarrinho = totalCarrinho + (item.valor * item.quantidade));
        totalCarrinho = totalCarrinho.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

        return (
            <Container>
                <Header>
                    <ion-icon onClick={() => voltarHome()} name="chevron-back-outline"></ion-icon>
                    <h1>Carrinho</h1>
                </Header>
                <ProdutoContainer>
                    {carrinho.map((item, key) => <ItensCarrinho
                        key={key}
                        id={item._id}
                        foto={item.foto}
                        titulo={item.titulo}
                        valor={item.valor}
                        quantidade={item.quantidade}
                        tamanho={item.tamanho}
                    />)}
                </ProdutoContainer>
                <hr className="hr" />
                <TotalCarrinho>Total Carrinho: {totalCarrinho}</TotalCarrinho>
                <hr className="hr" />
                <Botao onClick={() => finalizarPedido()}>
                    Finalizar Pedido
                </Botao>
                <Link to={`/`}>Continue comprando</Link>
            </Container>
        );
    }

    return (
        <CarrinhoVazio>
            <Header>
                <ion-icon onClick={() => voltarHome()} name="chevron-back-outline"></ion-icon>
                <h1>Carrinho</h1>
            </Header>
            <h1 className="titulo-carrinho-vazio">O seu carrinho está vazio</h1>
            <h2 className="subtitulo-carrinho-vazio">Não sabe o que comprar?</h2>
            <h2 className="subtitulo-carrinho-vazio">Milhares de produtos esperam por você!</h2>
        </CarrinhoVazio>
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

    a{
        margin-top: 10px;
        font-size: 12px;
        margin-bottom: 100px;
        text-decoration: none;
        color: #2424bbfd;
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
const CarrinhoVazio = styled.div`
    background-color: #DDDDDD;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;

    .titulo-carrinho-vazio{
        font-size: 20px;
        margin-top: 50px;
        margin-bottom: 30px;
    }

    .subtitulo-carrinho-vazio{
        font-size: 14px;
        color: #585555;
    }
`;
export default Carrinho;
