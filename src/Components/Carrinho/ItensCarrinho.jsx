import styled from 'styled-components';
const ItensCarrinho = ({ id, foto, titulo, valor, quantidade, tamanho }) => {
    let totalItem = parseFloat(valor) * quantidade;
    totalItem = totalItem.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    const valorConvertido = parseFloat(valor).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    return (
        <ContainerProduto>
            <div className="container">
                <img className={titulo} src={foto} alt="Imagem" />
                <div className="container-info">
                    <h2>{titulo}</h2>
                    <h3>Tamanho: {tamanho}</h3>
                    <Quantidade>
                        <span>{quantidade} x <label>{valorConvertido}</label></span>
                    </Quantidade>
                </div> 
            </div>
            <hr />
            <PrecoProduto>
                <h3>Total do Pedido:</h3>
                <span>{totalItem}</span>
            </PrecoProduto>
        </ContainerProduto>
    );
};

const ContainerProduto = styled.div`
    width: 85%;
    height: 140px;
    background-color: #ffffff;
    border-radius: 20px;
    margin-bottom: 12px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    .container{
        display: flex;
    }
    .container-info{
        display: flex;
        width: 100%;
        flex-direction:column;

    }
    .container-info h2{
        margin-top: 15px;
        font-weight: 500;
        margin-right: 5px;
        margin-left: 20px;
    }
    .container-info h3{
        margin-left: 20px;
        padding-top: 10px;
        font-size: 15px;
        color: #585555;
    }
    img{
        width: 40%;
        height: 100px;
        border-radius: 20px;
    }
`;
const PrecoProduto = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 5px;

    span{
        margin-right: 10px;
        color: #d86716;
        margin-left: 10px;
    }

    h3{
        color: #585555;
    }
`;
const Quantidade = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-end;
    margin-top: 15px;
    
    span{
        margin-right: 15px;
        font-size: 12px;
    }

    label{
        color: #585555;
    }
`;
export default ItensCarrinho;