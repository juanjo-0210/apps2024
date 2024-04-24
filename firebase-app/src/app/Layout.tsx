import { Link } from "react-router-dom"



const Layout = ({children}) => {
  return (
    <div>
        <Link to="/">Read</Link>
        <br/>
        <Link to="/create">Create</Link>
        <br/>
        <Link to="/Delete">Delete</Link>
        <div>{children}</div>
    </div>
  )
}

export default Layout