import { CadastroContainer, MainCadastro, FormDiv } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../../Contexts/UserContext";
import axios from "axios";

export default function Login({ setHeaderVisivel }) {
    setHeaderVisivel(true);
    const navigate = useNavigate();
    const { setUsuario } = useContext(UserContext);
    const [usuarioLogin, setUsuarioLogin] = useState({
        email: '',
        senha: ''
    });
    const [loading, setLoading] = useState(false);
    function login(e) {
        const { email, senha } = usuarioLogin;
        e.preventDefault();
        setLoading(true);
        axios.post("http://localhost:5000/login", {
            email,
            senha
        })
            .then(res => {
                const { nome, token, foto } = res.data;
                const usuario = {
                    nome,
                    token,
                    foto
                }
                //mudar o usuario context
                setUsuario(usuario);
                localStorage.setItem("usuario", JSON.stringify(usuario));
                alert("Bem vindo, " + nome);
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
            <MainCadastro>
                <h1>Login</h1>
                <FormDiv onSubmit={login}>
                    <input
                        onChange={e => setUsuarioLogin({ ...usuarioLogin, email: e.target.value })}
                        value={usuarioLogin.email}
                        placeholder="E-mail"
                        disabled={loading}
                        type="email"
                        required
                    />
                    <input
                        onChange={e => setUsuarioLogin({ ...usuarioLogin, senha: e.target.value })}
                        value={usuarioLogin.senha}
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