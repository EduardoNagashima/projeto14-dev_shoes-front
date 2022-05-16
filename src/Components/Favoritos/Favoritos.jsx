import styled from 'styled-components';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Favoritos = ({ setHeaderVisivel }) => {
    setHeaderVisivel(false);
    const navigate = useNavigate();

    function voltarHome() {
        navigate('/');
    }

    return (
        <Container>
            <Header>
                <ion-icon onClick={() => voltarHome()} name="chevron-back-outline"></ion-icon>
                <h1>Carrinho</h1>
            </Header>
            <Aviso>
                <img src="../assets/img/em_construcao.png" alt="Em construção" />
                <img src="../assets/img/em_construcao2.png" alt="Em construção" />
                <Link to={`/`}>Continue comprando</Link>
            </Aviso>
        </Container>

    );
}
const Container = styled.div`
    width: 100%;
    min-height: 100vh;
`;
const Aviso = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   
   img{
       margin-top: 60px;
       width: 65%;
   }

   a{
       margin-top: 30px;
   }
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    margin-bottom: 12px;
    background-color: #fff;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
    position: relative;

    ion-icon{
        position: absolute;
        font-size: 28px;
        left: 15px;
    }

    h1{
        font-family: 'Anton', sans-serif;
        font-size: 24px;
        letter-spacing: 0.5px;
    }
`;
export default Favoritos;