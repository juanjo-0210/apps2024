import { BrowserRouter, Routes, Route} from 'react-router-dom'
import {Home, Hilos, Coment} from '../pages/index.ts'
import Layout from './Layout.tsx'

const Router = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/hilos' element={<Hilos/>} />
                <Route path='/:id' element={<Coment/>} />
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default Router