import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    height: auto;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
`

export const FooterDiv = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    ion-icon{
        cursor: pointer;
        font-size: 20px;
        color: #000;
    }
    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p{
            font-size: 15px;
            font-weight: 700;
        }
    }
`

export const UserDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
        width: 35px;
        height: 35px;
        border-radius: 20px;
        background-size: cover;
    }
    p{
        font-size: 14px;
        font-weight: 700;
    }
`