
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import Page2 from "../pages/Page2"
import Layauot from './Layauot'
import Author from '../ejercicios/Author'
import Cuento from '../ejercicios/Cuento'
import Films from '../ejercicios/Films'
import GenerarImg from "../ejercicios/GenerarImg"
import InitAumentar from '../ejercicios/InitAumentar'
import RecuperarParam from '../ejercicios/RecuperarParam'
import Apifetch from '../ejercicios/Apifetch'
import ApiAxios from '../ejercicios/ApiAxios'



const Router = () => (
     <BrowserRouter>
        <Layauot>
            <Routes>   
                <Route index element={<Home/>} />
                <Route path="/page2" element={<Page2/>} />
                <Route path="/aumentar" element={<InitAumentar/>} />
                <Route path="/author" element={<Author/>} />
                <Route path="/cuento" element={<Cuento/>} />
                <Route path="/films" element={<Films/>} />
                <Route path="/generar-imagen" element={<GenerarImg/>} />
                <Route path="/recuperar-parametro/:id/:nombre/:apellidos" element={<RecuperarParam/>} />
                <Route path="/apifetch" element={<Apifetch/>} />
                <Route path="/apiaxios" element={<ApiAxios/>} />
                
                { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
                <Route path="*" element={<div>404</div> } />
            </Routes>
        </Layauot>
    </BrowserRouter>
)

export default Router