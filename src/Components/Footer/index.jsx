import { FooterDiv, FooterContainer, UserDiv } from "./style";
import UserContext from "../Contexts/UserContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
    const navigate = useNavigate();
    const { usuario, setUsuario } = useContext(UserContext);

    function logout() {
        setUsuario(null);
        localStorage.removeItem("usuario");
        navigate("/");
    }

    if (usuario) {
        return (
            <FooterContainer>
                <FooterDiv>
                    <UserDiv>
                        <img src={usuario.foto} alt="foto-de-usuario" />
                        <p>{usuario.nome}</p>
                    </UserDiv>
                    <Link to={"/favoritos"}><ion-icon name="heart-outline"></ion-icon></Link>
                    <Link to={"/carrinho"}><ion-icon name="cart-outline"></ion-icon></Link>
                    <ion-icon onClick={logout} name="log-out-outline"></ion-icon>
                </FooterDiv>
            </FooterContainer>
        );
    }

    return (
        <FooterContainer>
            <FooterDiv>
                <div>
                    <Link to={"/login"}><ion-icon name="person-outline"></ion-icon></Link>
                    <Link style={{ textDecoration: "none", color: "#000" }} to={"/login"}><p>Login</p></Link>
                </div>
            </FooterDiv>
        </FooterContainer>
    )
}