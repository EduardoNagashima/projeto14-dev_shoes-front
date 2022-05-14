import { LoginContainer, MainLogin, FormDiv } from "./style";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Cadastro({ setHeaderVisivel }) {
    setHeaderVisivel(true);
    const navigate = useNavigate('/');
    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        foto: '',
        senha: '',
        confirmarSenha: '',
        cep: '',
        estado: '',
        bairro: '',
        logradouro: '',
        cidade: '',
        numero: ''
    });

    function login(e) {
        e.preventDefault();
        setLoading(true);
        console.log('arrumar')
        axios.post('http://localhost:5000/cadastro', usuario)
            .then(res => {
                alert("Conta criada com sucesso!");
                navigate("/login");
                console.log(res);
            })
            .catch(err => {
                alert("Erro ao criar a conta", err.response.data);
                console.error(err);
            })
        setLoading(false);
    }

    return (
        <LoginContainer>
            <MainLogin>
                <h1>Cadastro de novo usuário</h1>
                <FormDiv onSubmit={login}>
                    <input
                        onChange={e => setUsuario({ ...usuario, nome: e.target.value })}
                        value={usuario.nome}
                        placeholder="Nome"
                        disabled={loading}
                        type="text"
                        required
                    />
                    <input
                        onChange={e => setUsuario({ ...usuario, email: e.target.value })}
                        value={usuario.email}
                        placeholder="Email"
                        disabled={loading}
                        type="email"
                        required
                    />
                    <input
                        onChange={e => setUsuario({ ...usuario, foto: e.target.value })}
                        value={usuario.foto}
                        placeholder="Foto (URL)"
                        disabled={loading}
                        type="text"
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
                    <input
                        onChange={e => setUsuario({ ...usuario, confirmarSenha: e.target.value })}
                        value={usuario.confirmarSenha}
                        placeholder="Confirmar Senha"
                        disabled={loading}
                        type="password"
                        required
                    />
                    <input
                        onChange={e => setUsuario({ ...usuario, cep: e.target.value })}
                        value={usuario.cep}
                        placeholder="CEP"
                        disabled={loading}
                        type="number"
                        required
                    />
                    <input
                        onChange={e => setUsuario({ ...usuario, estado: e.target.value })}
                        value={usuario.estado}
                        placeholder="Estado"
                        disabled={loading}
                        type="text"
                        required
                    />
                    <input
                        onChange={e => setUsuario({ ...usuario, bairro: e.target.value })}
                        value={usuario.bairro}
                        placeholder="Bairro"
                        disabled={loading}
                        type="text"
                        required
                    />
                    <input
                        onChange={e => setUsuario({ ...usuario, logradouro: e.target.value })}
                        value={usuario.logradouro}
                        placeholder="Logradouro"
                        disabled={loading}
                        type="text"
                        required
                    />
                    <input
                        onChange={e => setUsuario({ ...usuario, cidade: e.target.value })}
                        value={usuario.cidade}
                        placeholder="Cidade"
                        disabled={loading}
                        type="cidade"
                        required
                    />
                    <input
                        onChange={e => setUsuario({ ...usuario, numero: e.target.value })}
                        value={usuario.numero}
                        placeholder="Número"
                        disabled={loading}
                        type="number"
                        required
                    />
                    <button type="submit" disabled={loading}>Cadastrar</button>
                </FormDiv>
                <Link to={'/login'} style={{ textDecoration: 'none', color: '#000' }}><p>Já tem um cadastro? Faça login clicando aqui!</p></Link>
            </MainLogin>
        </LoginContainer >
    );
}