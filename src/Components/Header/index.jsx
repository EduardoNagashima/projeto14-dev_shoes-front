import styled from "styled-components";

export default function Header() {
    return (
        <Banner>
            <img src="./assets/img/logo.png" alt="banner" />
        </Banner>
    );
}

const Banner = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('./assets/img/banner.jpg');
    background-size: cover;
    filter: brightness(80%);
    img{
        width: 170px;
    }
`;