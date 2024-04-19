import {Link} from 'react-router-dom';
import { Nav, Row, Main } from './styles';


const Layauot = ({children}) => (
    <>  
        
        <Row>
            <Nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/page2"}>Page2</Link></li>
                    <li><Link to={"/aumentar"}>Aumentar</Link></li>
                    <li><Link to={"/author"}>Author</Link></li>
                    <li><Link to={"/cuento"}>Cuento</Link></li>
                    <li><Link to={"/films"}>Films</Link></li>
                    <li><Link to={"/generar-imagen"}>Generar Imagen</Link></li>
                    <li><Link to={"/recuperar-parametro/3/juan jose/mateo de jesus"}>Mostrar Parametro</Link></li>
                    <li><Link to={"/apifetch"}>Api Fetch</Link></li>
                    <li><Link to={"/apiaxios"}>Api Axios</Link></li>
                    <li><Link to={"/starwar"}>STAR WAR API EJERCICIO</Link></li>
                </ul>
            </Nav>
            <Main>
                <div>
                    <h1 style={{textAlign:"center"}}>Home</h1>
                </div>
                {children}
            </Main>
        </Row>
    </>
)

export default Layauot