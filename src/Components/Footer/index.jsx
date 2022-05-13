import { FooterDiv, FooterContainer, UserDiv } from "./style";
import UserContext from "../Contexts/UserContext";
import { useContext, useState, useEffect } from "react";

export default function Footer() {

    const { token } = useContext(UserContext);

    const [usuario, setUsuario] = useState({
        nome: 'Fulano',
        foto: 'https://i1.sndcdn.com/avatars-000600452151-38sfei-t240x240.jpg'
    })
    let footer =
        <FooterContainer>
            <FooterDiv>
                <ion-icon name="person-outline"></ion-icon>
                <ion-icon name="heart-outline"></ion-icon>
            </FooterDiv>
        </FooterContainer>

    useEffect(() => {
        if (!token) {
            footer =
                <FooterContainer>
                    <FooterDiv>
                        <UserDiv>
                            <img src={usuario.foto} alt="foto-de-usuario" />
                            <p>{usuario.nome}</p>
                        </UserDiv>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="log-out-outline"></ion-icon>
                    </FooterDiv>
                </FooterContainer>
        }
    })

    return (
        footer
    );
}