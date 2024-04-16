import { useParams } from "react-router-dom"

const RecuperarParam = () => {
    const { id, nombre,apellidos } = useParams()
  return (
    <>
    <h1>{id + " " + nombre +" " + apellidos}</h1>
    
    </>
  )
}

export default RecuperarParam