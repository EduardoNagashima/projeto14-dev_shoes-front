import styled from "styled-components";
import { Link } from "react-router-dom";

import banner from "./../../assets/banner.jpg";
import logo from "./../../assets/logo.png"

export default function Header({ visivel }) {

    if (visivel) {
        return (
            <Linke to={"/"}>
                <div>
                    <img src={logo} alt="banner" />
                </div>
            </Linke>
        );
    }

    return <></>;
}

const Linke = styled(Link)`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${banner});
    background-size: cover;
    filter: brightness(80%);
    img{
        width: 170px;
    }
`