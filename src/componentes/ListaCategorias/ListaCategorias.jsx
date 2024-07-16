import styled from "styled-components"

/* const categoriasVideo = [
    {
        titulo:"Front End",
        color: "#6BD1FF",
        colorCard: "#6BD1FF",
    },
    {
        titulo:"Back End",
        color: "#00C86F",
        colorCard: "#00C86F",
    },
    {
        titulo:"Inovación y Gestión",
        color:"#FFBA05",
        colorCard:"#FFBA05",
    }
] */

const InputEstilizado = styled.div `

    .linea{
        display: flex;
        flex-direction:column;
        justify-content:start;
        align-items:start;
        margin: 20px 0;
    }

    .data{
        width: 100%;
        height: 40px;
        margin: 0 20px;
        position: relative;
        align-content:center;
    }

    select {
        color: #f7f7f7;
        width: 90%;
        background-color: #000;
        border:none;
        border-radius:15px;
        outline-color: #2271D1;
        padding: 10px 5px;
        box-sizing:border-box;
    }

    label{
        margin: 7px;
        display:block;
        text-align:left;
    }
`


const ListaCategorias = (props) => {

    const categorias =[ 
        "Front end",
        "Back end",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) => {
        /* console.log("cambio", e.target.value) */
        props.actualizarValor(e.target.value)
    }

    return <>
    <InputEstilizado>
        <div className="linea">
            <div className="data">
                <label>Categoría</label>
                <select value={props.valor} onChange={manejarCambio} required>
                    <option value="" defaultValue="" hidden>Selecciona la categoría</option>
                    {categorias.map((categoria,index)=> <option key={index} value={categoria}>{categoria}</option>)}
                </select>
            </div>
    </div>
    </InputEstilizado>
    </>
}

export default ListaCategorias