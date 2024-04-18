
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
import Starwar from '../ejercicios/Starwar'
import StarWarCharacter from '../ejercicios/StarWarCharacter'



const Router = () => (
     <BrowserRouter >

        
            <Routes>   
                <Route index element={
                <Home/>} />
                <Route path="/page2" element={<Layauot><Page2/></Layauot>} />
                <Route path="/aumentar" element={<Layauot><InitAumentar/></Layauot>} />
                <Route path="/author" element={<Layauot><Author/></Layauot>} />
                <Route path="/cuento" element={<Layauot><Cuento/></Layauot>} />
                <Route path="/films" element={<Layauot><Films/></Layauot>} />
                <Route path="/generar-imagen" element={<Layauot><GenerarImg/></Layauot>} />
                <Route path="/recuperar-parametro/:id/:nombre/:apellidos" element={<Layauot><RecuperarParam/></Layauot>} />
                <Route path="/apifetch" element={<Layauot><Apifetch/></Layauot>} />
                <Route path="/apiaxios" element={<Layauot><ApiAxios/></Layauot>} />
                <Route path="/starwar/" element={<Layauot><Starwar/></Layauot>} />

                <Route path="/starwar/starwarWarCharacter/:api" element={
                    <Layauot>
                        <StarWarCharacter/>
                    </Layauot>
                    } />
                { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
                <Route path="*" element={<div>404</div> } />
            </Routes>
      
        
    </BrowserRouter>
)

export default Router