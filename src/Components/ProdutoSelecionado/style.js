import styled from "styled-components";

export const ProdutoSection = styled.section`
    width: 100%;
    height: 100vh;
    background-color: #DDDDDD;
`

export const ProdutoMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const DivImg = styled.div`
    margin-bottom: 5px;
    img{
        width: 100%;
        padding: 10px;
    }
    h1{
        text-align: center;
        font-size: 22px;
        font-weight: 700;
    }
`

export const Numeros = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px;
    font-size: 20px;
    justify-content: space-between;
`

export const Numero = styled.div`
    flex-wrap: nowrap;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: ${props=> props.selecionado ? "green": "#D0C9C0"};
    border: 1px solid #777777;
    border-radius: 1px;
    width: 65px;
    height: 25px;
    :hover{
        background-color: #6D8B74;
        transition: 0.5s;
        color: #D0C9C0;
    }
`

export const Descricao = styled.div`
    width: 95%;
    text-align: left;
    padding: 10px;
    background-color: #EEEEEE;
    border-radius: 1px;
    span{
        color: #111;
        font-size: 18px;
        text-align: justify;
    }
    h2{
        font-size: 18px;
        font-weight: 700;
    }
`

export const CompraDiv = styled.div`
    padding: 10px;
    button{
        background-color: #0A7029;
        color: #DBE8D8;
        font-weight: 700;
        font-size: 16px;
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 3px;
    }
`