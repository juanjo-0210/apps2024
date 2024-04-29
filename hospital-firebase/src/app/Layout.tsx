import { Link } from "react-router-dom"

const Layout = ({children}) => {
  return (
    <div>
        <nav>
           <ul>
              <li><Link to="/">Create</Link></li>
              <li><Link to="/read">Read</Link></li>
           </ul>
        </nav>
        <main>
            {children}
        </main>
    </div>
  )
}

export default Layout