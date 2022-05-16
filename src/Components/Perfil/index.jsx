import axios from "axios";

import { PerfilSection, PerfilMain, HeaderPerfil, ComprasDiv, Quantidade, ContainerProduto, PrecoProduto } from "./style";
import UserContext from "../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';

export default function Perfil({ setHeaderVisivel }) {
    setHeaderVisivel(true);
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
        axios.get("http://localhost:5000/perfil", config)
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
    }, [])

    if (!loading && perfilUsuario && compras) {
        return (
            <PerfilSection>
                <PerfilMain>
                    <h1>Perfil</h1>
                    <HeaderPerfil>
                        <img src={perfilUsuario.foto} alt="" />
                        <h2>{perfilUsuario.nome}</h2>
                    </HeaderPerfil>
                    <h3>Compras</h3>
                    <ComprasDiv>
                        {compras.map(e => {
                            const compra = e.compra[0]
                            console.log(compra)
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