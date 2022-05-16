import styled from "styled-components"

export const PerfilSection = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #DDDDDD;
`

export const PerfilMain = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 25px;
        color: #fff;
        font-weight: 700;
        backdrop-filter: blur(2px) brightness(20%);
        width: 100%;
        height: 55px;
        margin-bottom: 10px;
        letter-spacing: 2px;
    }
    h3{
        font-size: 18px;
        width: 95%;
        font-weight: 700;
        color: #413F42;
        background-color: #EEEEEE;
        border: 5px solid #eee;
        border-radius: 5px;
    }
`

export const DivHeader = styled.div`
    display: flex;
    background-color: #000;
    width: 100%;
    align-items: center;
    ion-icon{
        font-size: 30px;
        color: #fff;
    }
`

export const HeaderPerfil = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
    img{
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    }
    h2{
        font-size: 20px;
        font-weight: 700;
    }
`

export const ComprasDiv = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 50px;
    .hr{
        width: 100%;
        height: 4px;
        background-color: #fff;
    }
    img {
        width: 100px;
        border-radius: 20px;
        box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        div{
            display: flex;
            flex-direction: column; 
            align-items: center;
           
            p{
                font-weight: 700;
            }
            span{
                font-size: 20px;
                color: #404040;
            }
        }
    }
`