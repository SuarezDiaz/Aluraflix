import { useEffect } from "react";
import styled from "styled-components";


const CardEstilizada = styled.div`



.card-container {
        max-width: fit-content;
        border-color: white;
        display: flex;
        border-style: solid;
        border-radius:24px;
    }

.icons{
    display: flex;
    justify-content: space-evenly;

}

`



function CartaVideo () {

    return <>
    <CardEstilizada>
            <div  className="card-container">
                <div className="img-container">
                   {/*  <img src={imagen} alt={titulo} /><a href={video}></a> */}
                    <div className="full-icons-container">
                        <div className="icons">
                            <div className="icon-container">
                                <img /*  key={id} */ src="./img/delete_vector.png" alt="Delete" />
                            </div>
                            <div className="icon-container">
                                <img src="./img/edit_vector.png" alt="Delete" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </CardEstilizada>        
        </>
        }

export default CartaVideo