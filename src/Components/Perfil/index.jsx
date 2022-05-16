import axios from "axios";

import { PerfilSection, PerfilMain, HeaderPerfil, ComprasDiv, DivHeader } from "./style";
import UserContext from "../../Contexts/UserContext";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';

export default function Perfil({ setHeaderVisivel }) {
    setHeaderVisivel(false);
    const { usuario } = useContext(UserContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [perfilUsuario, setPerfil] = useState();
    const [compras, setCompras] = useState();

    function getPerfil() {
        setLoading(true);
        if (!usuario) {
            navigate('/login');
            return;
        }
        const config = { headers: { Authorization: `Bearer ${usuario.token}` } };
        axios.get("https://dev-shoes-back.herokuapp.com/perfil", config)
            .then((res) => {
                setPerfil(res.data[0]);
                setCompras(res.data[1].comprasUsuario);
            }).catch((err) => {
                console.error(err);
            })
        setLoading(false);
    }

    useEffect(() => {
        getPerfil();
    },[])


    if (!loading && perfilUsuario && compras) {
        return (
            <PerfilSection>
                <PerfilMain>
                    <DivHeader>
                        <Link style={{ textDecoration: "none", color: "#111" }} to={"/"}><ion-icon name="home-outline"></ion-icon></Link>
                        <h1>Perfil</h1>
                    </DivHeader>
                    <HeaderPerfil>
                        <img src={perfilUsuario.foto} alt="" />
                        <h2>{perfilUsuario.nome}</h2>
                    </HeaderPerfil>
                    <h3>Compras</h3>
                    <ComprasDiv>
                        {compras.reverse().map((e, key) => {
                            const compra = e.compra[0]
                            return (
                                <>
                                    <div>
                                        <img src={compra.foto} alt="foto-produto" />
                                        <h2>{compra.titulo}</h2>
                                        <div>
                                            <p>R${compra.valor}</p>
                                            <span>T {compra.tamanho}</span>
                                        </div>
                                    </div>
                                    <hr className="hr" />
                                </>
                            )
                        })}
                    </ComprasDiv>
                </PerfilMain>
            </PerfilSection>
        );
    }

    return <></>
}