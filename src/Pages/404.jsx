import styled from "styled-components"
import { Link } from "react-router-dom"


const PageNotFund = styled.div `
    height:100vh;
    display:flex;
    flex-direction:column-reverse;
    justify-content:center;
    background-color:#000;
    img{
      width:350px;
    }
    h2{
      color: white;
      font-size: bold;
      font-weight: 600;
      margin:10px;
    }
    button{
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


function NotFound (){
    return <>
    <PageNotFund>
      <section>
        <div>
          <img src="./img/404.webp" alt="Error 404" />
          <h2>Página no encontrada intenta regresar a la página de inicio.</h2>
          <Link to = "/"><button className="home"><a href="/"/>Home</button></Link>
        </div>
      </section>
    </PageNotFund>
    </>
}

export default NotFound
