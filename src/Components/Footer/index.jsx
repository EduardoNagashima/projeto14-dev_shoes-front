import { FooterDiv, FooterContainer, UserDiv } from "./style";
import UserContext from "../Contexts/UserContext";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
    const { token } = useContext(UserContext);
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        nome: 'Fulano',
        foto: 'https://i1.sndcdn.com/avatars-000600452151-38sfei-t240x240.jpg'
    })

    let footer =
        <FooterContainer>
            <FooterDiv>
                <Link to={"/login"}><ion-icon name="person-outline"></ion-icon></Link>
                <Link to={"/carrinho"}><ion-icon name="cart-outline"></ion-icon></Link>
            </FooterDiv>
        </FooterContainer>

    function logout() {
        localStorage.removeItem("token");
        navigate("/");
    }

    if (token) {
        footer =
            <FooterContainer>
                <FooterDiv>
                    <UserDiv>
                        <img src={usuario.foto} alt="foto-de-usuario" />
                        <p>{usuario.nome}</p>
                    </UserDiv>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="cart-outline"></ion-icon>
                    <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
                </FooterDiv>
            </FooterContainer>
    }

    return footer;
}