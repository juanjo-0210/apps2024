import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "./Layout";
import Read from "../pages/Read";


const Router = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home/>} />
                <Route path="/read" element={<Read/>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default Router