import React from 'react'
import { Link } from 'react-router-dom'


const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/hilos'>Crear Hilos</Link></li>
                <li><Link to='/id'>Comentario</Link></li>
            </ul>
        </nav>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout