import { CadastroContainer, MainCadastro, FormDiv } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import Header from "../Header";

export default function Login() {
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState({
        email: '',
        senha: ''
    });
    const [loading, setLoading] = useState(false);
    function login(e) {
        const { email, senha } = usuario;
        e.preventDefault();
        setLoading(true);
        axios.post("http://localhost:5000/login", {
            email,
            senha
        })
            .then(res => {
                console.log(res);
                alert("Bem vindo, ");
                navigate("/");
            })
            .catch(err => {
                alert('Erro ao fazer o login')
                console.error(err);
            }).finally(() => {
                setLoading(false);
            })
    }

    return (
        <CadastroContainer>
            <Header />
            <MainCadastro>
                <h1>Login</h1>
                <FormDiv onSubmit={login}>
                    <input
                        onChange={e => setUsuario({ ...usuario, email: e.target.value })}
                        value={usuario.email}
                        placeholder="E-mail"
                        disabled={loading}
                        type="email"
                        required
                    />
                    <input
                        onChange={e => setUsuario({ ...usuario, senha: e.target.value })}
                        value={usuario.senha}
                        placeholder="Senha"
                        disabled={loading}
                        type="password"
                        required
                    />
                    <button type="submit" disabled={loading}>Entrar</button>
                </FormDiv>
                <Link to={'/cadastro'} style={{ textDecoration: 'none', color: '#000' }}><p>Ainda não tem cadastro? Clique aqui!</p></Link>
            </MainCadastro>
        </CadastroContainer >
    );
}