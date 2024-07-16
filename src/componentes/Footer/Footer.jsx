import styled from "styled-components";

const FooterEstilizado = styled.div `
    width: 100%;
    height: 125px;
    background-color: #262626;
    display: flex;
    justify-content: center;
    align-items:center;
    border-top: #2271d1 solid 4px;
    filter: drop-shadow(0px 5px 29px #2271D1);
    img{width:168px;
        height:40px;
        padding: 20px 30px;}
`

function Footer () {
    return <FooterEstilizado>
     <img src="./img/aluraflix.png" alt="Logo Aluraflix" />
    </FooterEstilizado>
}

export default Footer