import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: sticky;
    bottom: 0;
    width: 100%;
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
        font-size: 30px;
        color: #000;
    }
`

export const UserDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`