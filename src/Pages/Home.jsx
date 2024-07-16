import styled from "styled-components";
import Banner from "../componentes/Banner/Banner";
import CardVideo from "../componentes/Categorias/Categorias";
import { listaVideos } from "../componentes/Funciones/Funciones";
import { useEffect, useState } from "react";


const CardEstilizada = styled.section`

.sectionCards {
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    align-items: center;
}


.card-container {
        max-width: fit-content;
        border-color: white;
        display: flex;
        flex-direction:column;
        border-style: solid;
        border-radius:24px;
        
    }



.img-container img{
    width:400px;
    border-radius:24px 24px 0 0 ;
    
} 

.icon-container{
    display:flex;
    gap:20px;
    
}

.icons-container{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    
}

.icons{
    display: flex;
    justify-content: space-evenly;
    

}
`


const HomePage = () => {

    const [tarjetas,setTarjetas] = useState (null)

    useEffect (() => {
        listaVideos(setTarjetas)
    },[])
    
    return (
        <>
            <Banner/> 
            <CardEstilizada>
            <section className="sectionCards">
            {tarjetas != null ? (
                tarjetas.map(tarjeta => (
                            <>
                            <div key={tarjeta.id} className="category-container">
                                
                            </div>
                                <div  className="card-container">
                                    <div className="img-container">
                                        <img src={tarjeta.imagen} alt={tarjeta.titulo} href={tarjeta.video}/>
                                        
                                    </div>
                                    <div className="icons-container">
                                        <div className="icon-container">
                                            <img  src="./img/delete_vector.png" alt="Borrar"/>
                                            
                                        </div>
                                        <div className="icon-container">
                                            <img src="./img/edit_vector.png" alt="Editar" />
                                            
                                        </div>
                                    </div>
                                </div>
                            </>
                ))
            ) : ('No hay videos') }
        </section>
        </CardEstilizada>
        </>
    );
}

export default HomePage