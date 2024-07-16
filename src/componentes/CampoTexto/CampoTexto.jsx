import styled from "styled-components";

const CampoTxt = styled.div`



.campo-linea{
    display: flex;
    flex-direction:column;
    justify-content:start;
    align-items:start;
    margin: 20px 0;
    gap:50px;
    }

.input-data{
    width: 100%;
    height: 40px;
    margin: 0 20px;
    position: relative;
    align-content:center;
}

.input-data input{
    color: #f7f7f7;
    width: 90%;
    background-color: #000;
    border:none;
    border-radius:15px;
    outline-color: #2271D1;
    padding: 10px 5px;
    box-sizing:border-box;
}

.input-data label{
    margin: 7px;
    display:block;
    text-align:left;
}
`



const CampoTexto = (props) => {

    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    return <CampoTxt>
    <div className="campo-linea">
        <div className="input-data">
            <label>{props.titulo}</label>
            <input 
                placeholder={props.placeholder} 
                required
                value={props.valor}
                onChange={manejarCambio}
            />
        </div>
    </div>
    </CampoTxt>
}

export default CampoTexto 