import  "./Header.css"
import { Link } from "react-router-dom"


function Header () {
    return <header className="header">
        <div className="imagen">
            <img src="./img/aluraflix.png" alt="AluraFlix logo" />
        </div>
        <div className="botones">
            <Link to="/"><button className="home">Home</button></Link>
            <Link to ="/nvideo"><button className="nuevo">Nuevo video</button></Link>
        </div>
        
    </header>
}

export default Header