import styled from "styled-components";
import { useState } from "react";

const CardsEstilos = styled.section`
    .card-section{
        width:100%;
        
    }

    .categoria{
        width:432px;
        height:70px;
        border-radius:15px;
        align-content: center;
        font-size:32px;
        font-style:extra-bold;
        color:#f5f5f5
    }

    .cards-container{
        display:flex;
        justify-content: space-around;
        align-items:center;
        flex-wrap:wrap;
        box-sizing: content-box;
        gap:35px;
    }

`

const categoriaNombre = () => {
    return [
        {
            id: 1,
            titulo: "Back end",
            color: "#00C86F"
        },
        {
            id: 2,
            titulo: "Front end",
            color: "#6BD1FF"
        },
        {
            id: 3,
            titulo: "Innovación y gestión",
            color: "#FFBA05"
        }
    ];
};

const CardVideo = () => {
    // Call the function to get the array of categories
    const categorias = categoriaNombre(); 

    const listaCategorias = categorias.map(categoria => (
        <h2 key={categoria.id} style={{ color: categoria.color }}>
            {categoria.titulo}
        </h2>
    ));

    return (
        <div>{listaCategorias}</div>
    );
};

export default CardVideo;