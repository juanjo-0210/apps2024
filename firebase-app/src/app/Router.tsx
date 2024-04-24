import { BrowserRouter, Routes, Route} from "react-router-dom"
import Read from "../components/Read"
import Layout from "./Layout"
import Create from "../components/Create"
import Delete from "../components/Delete"


const Router = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Read/>} />
                <Route path="/create" element={<Create/>} />
                <Route path="/delete" element={<Delete/>} />
                <Route path="*" element={<div>404</div>} />
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default Router