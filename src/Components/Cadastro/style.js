import styled from "styled-components";

export const LoginContainer = styled.section`
    width: 100%;
    height: 100%;
    background-color: #DDDDDD;
    min-width: 400px;
`

export const MainLogin = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    p {
        margin-bottom: 20px;
    }
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        font-size: 25px;
        color: #696969;
        font-weight: 700;
        background-color: #f5f5f5;
        width: 100%;
        height: 55px;
    }
`

export const FormDiv = styled.form`
    width: 100%;
    height: 440px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    input{
        width: 250px;
        font-size: 15px;
        height: 25px;
        text-align: center;
        border-radius: 4px;
        margin-bottom: 5px;
        border: none;
        padding: 10px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    }
    button{
        margin-top: 10px;
        width: 250px;
        height: 24px;
        font-weight: 400;
        font-size: 17px;
        border: none;
        align-items: center;
        justify-content: center;
        text-align: center;
        cursor: pointer;
        margin-bottom: 10px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
        :hover{
            color: white;
            transition: 0.4s;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        }
    }
`