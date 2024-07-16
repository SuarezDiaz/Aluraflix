import styled from "styled-components"
import CampoTexto from "../componentes/CampoTexto/CampoTexto"
import ListaCategorias from "../componentes/ListaCategorias/ListaCategorias"
import BotonGuardar from "../componentes/Guardar/Guardar"
/* import ManejarEnvio from "../componentes/Guardar/Guardar" */
import BotonLimpiar from "../componentes/Limpiar/Limpiar"
import { useContext, useState } from "react"


const FormularioEstilizado = styled.div`
    /* display:flex; */
    /* justify-content:center; */
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;

    .nuevovideo{
        display:flex;
        flex-direction: column;
    }

    .info{
        width:auto;
        color: #f7f7f7;
        font-size:18px;
        display:flex;
        flex-direction: column;
        margin:10px;
        align-items:center;
    }

    .info h1{
        margin:5px;
    }


    .videodiv{
        /* align-self:center; */
        box-sizing:content-box;
        margin: 20px;
        padding: 10px;
        color: #f7f7f7;
        background: linear-gradient(180.2deg, #191919 6.8%, #262626 131%);
        width:90vw;
        height:80%;
        border-radius:20px;
        /* box-shadow:7px 7px 15px #2271D1; */
    }

    .inputs-container{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        gap:15%;
    }
    
    .Categoría{
        margin-top: 5px;
        align-content:center;
    }


    .botones{
        display:flex;
        flex-direction: row;
        justify-content:space-around;
    }

` 


function NuevoVideo () {

        const [titulo, setTitulo] = useState ("")
        const [categoria, setCategoria] = useState("")
        const [imagen, setImagen] = useState("")
        const [video, setVideo] = useState("")
        const [descripcion, setDescripcion] = useState("")

    return <>
        <FormularioEstilizado>
        <section className="nuevovideo">
            <div className="info">
            <h1>NUEVO VIDEO</h1>
            <h3>Complete el formulario para crear una nueva tarjeta de video</h3>
            </div>
            <form   className="videodiv" id="formId"> 
                <div className="inputs-container">
                <CampoTexto 
                    titulo="Título" 
                    placeholder="Ingrese el título" 
                    valor={titulo}
                    actualizarValor={setTitulo}
                />
                <ListaCategorias 
                    titulo="Categoría" 
                    placeholder="Seleccione la categoría" 
                    valor={categoria}
                    actualizarValor={setCategoria}
                />
                </div>
                <div className="inputs-container">
                <CampoTexto 
                    titulo="Imagen" 
                    placeholder="El enlace es obligatorio" 
                    valor={imagen}
                    actualizarValor={setImagen}    
                />
                <CampoTexto 
                    titulo="Video" 
                    placeholder="Ingrese el enlace del video" 
                    valor={video}
                    actualizarValor={setVideo}
                />
                </div>
                <div className="inputs-container">
                <CampoTexto 
                    titulo="Descripción"
                    placeholder="¿De qué se trata este vídeo?" 
                    valor={descripcion}
                    actualizarValor={setDescripcion}
                />
                </div>
                <div className="botones">
                <BotonGuardar />
                <BotonLimpiar />
                </div>
            </form>
            

        </section>
    </FormularioEstilizado>
    </>
    
}

export default NuevoVideo