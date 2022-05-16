import styled from "styled-components";


export const ProdutoSection = styled.section`
    width: 100%;
    min-width:400px;
    min-height: 100vh;
    background-color: #fff;
`

export const ProdutoMain = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        font-size: 18px;
        width: 95%;
        font-weight: 700;
        color: #413F42;
        background-color: #EEEEEE;
        border: 5px solid #eee;
        margin-bottom: 5px;
        border-radius: 5px;
    }
`

export const ProdutoHeader = styled.div`
    display: flex;
    backdrop-filter: blur(2px) brightness(20%);
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 55px;
    h1 {
        font-family: 'Anton', sans-serif;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: left;
        font-size: 18px;
        color: #fff;
        font-weight: 400;
        
    }
    ion-icon {
        filter: drop-shadow(3px 3px 8px #fff);
        color: #fff;
        padding: 10px;
        font-size: 25px;
    }
`

export const DivImg = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Radio+Canada:wght@400;700&display=swap');
    margin-bottom: 5px;
    img{
        width: 100%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
        margin-bottom: 20px;
    }
    h1{
        font-family: 'Radio Canada', sans-serif;
        text-align: left;
        margin-left: 10px;
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 40px;
        color: #413F42;
    }
`

export const Numeros = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px;
    font-size: 17px;
    justify-content: space-between;
    margin-bottom: 30px;
`

export const Numero = styled.div`
    flex-wrap: nowrap;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    background-color: ${props=> props.selecionado ? "#6FDFDF": "#EEEEEE"};
    border: 1px solid #777777;
    border-radius: 100px;
    width: 65px;
    height: 25px;
    cursor: pointer;
    transition: 0.5s;
    box-shadow: ${props=> props.selecionado ? "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;" : "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"};
    :hover{
        background-color: #6FDFDF;
        transition: 0.3s;
    }
`

export const Descricao = styled.div`
    width: 95%;
    text-align: justify;
    margin-bottom: 30px;
    span{
        color: #7F8487;
        font-size: 17px;
        font-weight: 500;
        padding: 30px;
    }
    h2{
        font-size: 18px;
        font-weight: 700;
        color: #413F42;
        background-color: #EEEEEE;
        border: 5px solid #eee;
        margin-bottom: 5px;
        border-radius: 5px;
    }
`

export const DivQuantidade = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #413F42;
    height: 100px;
    ion-icon {
        font-size: 30px;
        cursor: pointer;
    }
`

export const CompraDiv = styled.div`
    display: flex;
    margin-bottom: 100px;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const Button = styled.button`
    background-color: ${props=> props.disabled ? "gray" : "#27DB27"};
    transition: 0.5s;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    width: 100px;
    height: 50px;
    border: none;
    border-radius: 3px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`