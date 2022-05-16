import { Link } from "react-router-dom";
import styled from 'styled-components';

const Produto = ({ id, foto, titulo, valor }) => {
    let valorConvertido = parseInt(valor);
    valorConvertido = valorConvertido.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return (
        <Link to={`/produtos/${id}`}>
            <ContainerProduto>
                <img className='home-filme-img' src={foto} alt="Imagem" />
                <h3>{titulo.substring(0, 27)}...</h3>
                <PrecoProduto>{valorConvertido}</PrecoProduto>
            </ContainerProduto>
        </Link>
    )
}
const ContainerProduto = styled.div`
    width: 145px;
    height: 209px;
    background-color: #ffffff;
    margin-bottom: 12px;
    border-radius: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
    img{
        border-radius: 10px;
        width: 100%;
        height: 140px;
    }

    h3{
        font-size: 16px;
        margin-left: 4px;
        margin-right: 4px;
        font-family: arial,sans-serif;
    }
`;

const PrecoProduto = styled.div`
   display: flex;
   justify-content: center;
   font-weight: bold;
   margin: 10px 6px;
   background-color: #d86716;
   border-radius: 25px;
   color: #fff;
`;

export default Produto;