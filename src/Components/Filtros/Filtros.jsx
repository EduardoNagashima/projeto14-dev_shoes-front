import styled from 'styled-components';
const Filtros = ({ nomeFiltro, filtroEscolhido, setFiltroEscolhido }) => {
    
    function redefinirFiltro(nomeFiltro){
        setFiltroEscolhido(nomeFiltro);
    }

    return (
        <TituloFiltro nomeFiltro={nomeFiltro} filtroEscolhido={filtroEscolhido}>
            <span onClick={() => redefinirFiltro(nomeFiltro)}><label>•</label>{nomeFiltro}</span>
        </TituloFiltro>
    );
}

const TituloFiltro = styled.div`
    color: ${props => props.nomeFiltro === props.filtroEscolhido ? "#000000;" : "#aaaa;"};
    label{
        margin-right: 7px;
    }
    span{
        font-family: 'Anton', sans-serif;
        font-size: 25px;
        margin-left: 8px;
        cursor: pointer;
    }
    span:last-child{
        margin-right: 12px;
    }
`;
export default Filtros;