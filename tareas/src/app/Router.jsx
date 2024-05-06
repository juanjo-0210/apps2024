import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
import Task from '../pages/Task'

const Router = () => {
  return (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route index element={<Home/>} />
                <Route path='task' element={<Task/>} />
                <Route path='*' element={<div>404</div>} />
            </Routes>
        </Layout>
    </BrowserRouter>
  )
}

export default Router