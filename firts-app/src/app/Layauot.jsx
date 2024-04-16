import {Link} from 'react-router-dom';


const Layauot = ({children}) => (
    <>  
        <div>
            <h1 style={{textAlign:"center"}}>Home</h1>
        </div>
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/page2"}>Page2</Link></li>
                <li><Link to={"/aumentar"}>Aumentar</Link></li>
                <li><Link to={"/author"}>Author</Link></li>
                <li><Link to={"/cuento"}>Cuento</Link></li>
                <li><Link to={"/films"}>Films</Link></li>
                <li><Link to={"/generar-imagen"}>Generar Imagen</Link></li>
                <li><Link to={"/recuperar-parametro"}>Mostrar Parametro</Link></li>
                <li><Link to={"/apifetch"}>Api Fetch</Link></li>
                <li><Link to={"/apiaxios"}>Api Axios</Link></li>
            </ul>
        </nav>
        <main>{children}</main>
        <a href="http://localhost:5173/recuperar-parametro/3/juan jose/mateo de jesus">pulsa</a>
    </>
)

export default Layauot