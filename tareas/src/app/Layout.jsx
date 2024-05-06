import React from 'react'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/task">Task</Link></li>
        </ul>
        {children}
        </div>
  )
}

export default Layout