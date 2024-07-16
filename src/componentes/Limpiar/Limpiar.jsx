import styled from "styled-components"


const BotonEstilizado = styled.div `
    .limpiar{
        width: 180px;
        height: 54px;
        margin: 8px;
        background-color: #000;
        color: white;
        border: white solid 2px;
    }

    button:hover{
    color: blue;
    border: blue solid 2px;
    box-shadow: inset 0 0 10px 5px blue;
    transition: 950ms;
} 

`


const BotonLimpiar = () => {
    return <>
        <BotonEstilizado>
        <button className="limpiar">Limpiar</button>
        </BotonEstilizado>
    </>
}

export default BotonLimpiar